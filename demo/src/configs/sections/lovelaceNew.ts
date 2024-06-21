import { DemoConfig } from "../types";

export const demoLovelaceSections: DemoConfig["lovelace"] = () => ({
  title: "Home Dashboard Demo",
  views: [
    {
      type: "sections",
      title: "Hotel Rooms",
      path: "home",
      icon: "mdi:home-assistant",
      sections: [
        {
          title: "🔑 Room 1010",
          cards: [
            {
              type: "tile",
              entity: "light.1010_bedroom_lights",
              name: "Bedroom Lights",
              features: [
                {
                  type: "light-brightness",
                },
              ],
            },
            {
              type: "tile",
              entity: "light.1010_left_reading_light",
              name: "Left Reading Light",
            },
            {
              type: "tile",
              entity: "light.1010_right_reading_light",
              name: "Right Reading Light",
            },
            {
              type: "sensor",
              entity: "climate.1010",
              name: "Thermostat",
            },
            {
              type: "sensor",
              entity: "sensor.1010_room_temperature",
              name: "Room Temperature",
            },
            {
              type: "tile",
              entity: "cover.1010_blackout",
              name: "Blackout",
            },
            {
              type: "tile",
              entity: "binary_sensor.1010_guest_in_room",
              name: "Occupancy",
            },
          ],
        },
        {
          title: "🔑 Room 1011",
          cards: [
            {
              type: "tile",
              entity: "light.1011_bedroom_lights",
              name: "Bedroom Lights",
              features: [
                {
                  type: "light-brightness",
                },
              ],
            },
            {
              type: "tile",
              entity: "light.1011_left_reading_light",
              name: "Left Reading Light",
            },
            {
              type: "tile",
              entity: "light.1011_right_reading_light",
              name: "Right Reading Light",
            },
            {
              type: "sensor",
              entity: "climate.1011",
              name: "Thermostat",
            },
            {
              type: "sensor",
              entity: "sensor.1011_room_temperature",
              name: "Room Temperature",
            },
            {
              type: "tile",
              entity: "cover.1011_blackout",
              name: "Blackout",
            },
            {
              type: "tile",
              entity: "binary_sensor.1011_guest_in_room",
              name: "Occupancy",
            },
          ],
        },
        {
          title: "🔑 Room 1012",
          cards: [
            {
              type: "tile",
              entity: "light.1012_bedroom_lights",
              name: "Bedroom Lights",
              features: [
                {
                  type: "light-brightness",
                },
              ],
            },
            {
              type: "tile",
              entity: "light.1012_left_reading_light",
              name: "Left Reading Light",
            },
            {
              type: "tile",
              entity: "light.1012_right_reading_light",
              name: "Right Reading Light",
            },
            {
              type: "sensor",
              entity: "climate.1012",
              name: "Thermostat",
            },
            {
              type: "sensor",
              entity: "sensor.1012_room_temperature",
              name: "Room Temperature",
            },
            {
              type: "tile",
              entity: "cover.1012_blackout",
              name: "Blackout",
            },
            {
              type: "tile",
              entity: "binary_sensor.1012_guest_in_room",
              name: "Occupancy",
            },
          ],
        },
        {
          title: "🔑 Room 1013",
          cards: [
            {
              type: "tile",
              entity: "light.1013_bedroom_lights",
              name: "Bedroom Lights",
              features: [
                {
                  type: "light-brightness",
                },
              ],
            },
            {
              type: "tile",
              entity: "light.1013_left_reading_light",
              name: "Left Reading Light",
            },
            {
              type: "tile",
              entity: "light.1013_right_reading_light",
              name: "Right Reading Light",
            },
            {
              type: "sensor",
              entity: "climate.1013",
              name: "Thermostat",
            },
            {
              type: "sensor",
              entity: "sensor.1013_room_temperature",
              name: "Room Temperature",
            },
            {
              type: "tile",
              entity: "cover.1013_blackout",
              name: "Blackout",
            },
            {
              type: "tile",
              entity: "binary_sensor.1013_guest_in_room",
              name: "Occupancy",
            },
          ],
        },
        {
          title: "🔑 Room 1014",
          cards: [
            {
              type: "tile",
              entity: "light.1014_bedroom_lights",
              name: "Bedroom Lights",
              features: [
                {
                  type: "light-brightness",
                },
              ],
            },
            {
              type: "tile",
              entity: "light.1014_left_reading_light",
              name: "Left Reading Light",
            },
            {
              type: "tile",
              entity: "light.1014_right_reading_light",
              name: "Right Reading Light",
            },
            {
              type: "sensor",
              entity: "climate.1014",
              name: "Thermostat",
            },
            {
              type: "sensor",
              entity: "sensor.1014_room_temperature",
              name: "Room Temperature",
            },
            {
              type: "tile",
              entity: "cover.1014_blackout",
              name: "Blackout",
            },
            {
              type: "tile",
              entity: "binary_sensor.1014_guest_in_room",
              name: "Occupancy",
            },
          ],
        },
        {
          title: "🔑 Room 1015",
          cards: [
            {
              type: "tile",
              entity: "light.1015_bedroom_lights",
              name: "Bedroom Lights",
              features: [
                {
                  type: "light-brightness",
                },
              ],
            },
            {
              type: "tile",
              entity: "light.1015_left_reading_light",
              name: "Left Reading Light",
            },
            {
              type: "tile",
              entity: "light.1015_right_reading_light",
              name: "Right Reading Light",
            },
            {
              type: "sensor",
              entity: "climate.1015",
              name: "Thermostat",
            },
            {
              type: "sensor",
              entity: "sensor.1015_room_temperature",
              name: "Room Temperature",
            },
            {
              type: "tile",
              entity: "cover.1015_blackout",
              name: "Blackout",
            },
            {
              type: "tile",
              entity: "binary_sensor.1015_guest_in_room",
              name: "Occupancy",
            },
          ],
        },
        {
          title: "🔑 Room 1016",
          cards: [
            {
              type: "tile",
              entity: "light.1016_bedroom_lights",
              name: "Bedroom Lights",
              features: [
                {
                  type: "light-brightness",
                },
              ],
            },
            {
              type: "tile",
              entity: "light.1016_left_reading_light",
              name: "Left Reading Light",
            },
            {
              type: "tile",
              entity: "light.1016_right_reading_light",
              name: "Right Reading Light",
            },
            {
              type: "sensor",
              entity: "climate.1016",
              name: "Thermostat",
            },
            {
              type: "sensor",
              entity: "sensor.1016_room_temperature",
              name: "Room Temperature",
            },
            {
              type: "tile",
              entity: "cover.1016_blackout",
              name: "Blackout",
            },
            {
              type: "tile",
              entity: "binary_sensor.1016_guest_in_room",
              name: "Occupancy",
            },
          ],
        },
        {
          title: "🔑 Room 1017",
          cards: [
            {
              type: "tile",
              entity: "light.1017_bedroom_lights",
              name: "Bedroom Lights",
              features: [
                {
                  type: "light-brightness",
                },
              ],
            },
            {
              type: "tile",
              entity: "light.1017_left_reading_light",
              name: "Left Reading Light",
            },
            {
              type: "tile",
              entity: "light.1017_right_reading_light",
              name: "Right Reading Light",
            },
            {
              type: "sensor",
              entity: "climate.1017",
              name: "Thermostat",
            },
            {
              type: "sensor",
              entity: "sensor.1017_room_temperature",
              name: "Room Temperature",
            },
            {
              type: "tile",
              entity: "cover.1017_blackout",
              name: "Blackout",
            },
            {
              type: "tile",
              entity: "binary_sensor.1017_guest_in_room",
              name: "Occupancy",
            },
          ],
        },
      ],
    },
  ],
});
