# API Reference

## Intro
- All API responses are performed via a GET request, and any submitted data is through query parameters
- The basic structure consists of an object with payload and error fields

## /all

#### Usage
hostname/all

#### Returns
A list of all countries in the payload

## /country

#### Usage
hostname/country?name=countryName

#### Returns
The country that matches the name or an error indicating the problem

## /updategrowth

#### Usage
hostname/updategrowth?name=countryName&growth=growthRate

#### Returns
An error describing the problem or a success message

## /tick

#### Usage
hostname/tick

#### Returns
A message saying the tick is successful

## /reset

#### Usage
hostname/reset

#### Returns
A message saying the reset is successful
