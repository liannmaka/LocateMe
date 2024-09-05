import * as turf from "@turf/turf";
const apiKey = import.meta.env.VITE_AWS_API_KEY;
const region = "eu-north-1";

// Create an authentication helper instance using an API key
const authHelper =
  await amazonLocationAuthHelper.withAPIKey(apiKey);

const client = new amazonLocationClient.LocationClient({
  region,
  ...authHelper.getLocationClientConfig() // Provides configuration required to make requests to Amazon Location
});

export const searchPlace = async (
  indexName,
  client,
  placeText
) => {
  const params = {
    IndexName: indexName,
    Text: placeText
  };

  const data = await client
    .searchPlaceIndexForText(params)
    .promise();
  const coordinates = data.Results[0].Place.Geometry.Point;

  console.log(coordinates);
  return coordinates;
};

export const calculateRoute = async (
  routeCalculator,
  client,
  from,
  to
) => {
  const params = {
    CalculatorName: routeCalculator,
    DeparturePosition: [from.longitude, from.latitude],
    DestinationPosition: [to.longitude, to.latitude],
    IncludeLegGeometry: true
  };

  console.log(params);

  const data = await client
    .calculateRoute(params)
    .promise();

  return data;
};

export const makeLegFeatures = legs =>
  legs.map(leg => {
    const geom = leg.Geometry;

    const {
      Geometry,
      StartPosition,
      EndPosition,
      Steps,
      ...properties
    } = leg;

    return turf.feature(
      {
        type: Object.keys(geom)[0],
        coordinates: Object.values(geom)[0]
      },
      properties
    );
  });
