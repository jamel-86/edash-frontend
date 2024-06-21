import { convertEntities } from "../../../../src/fake_data/entity";
import { DemoConfig } from "../types";

export const demoEntitiesSections: DemoConfig["entities"] = () =>
  convertEntities({
    "cover.1010_blackout": {
      "entity_id": "cover.1010_blackout",
      "state": "open",
      "attributes": {
        "current_position": 100,
        "device_class": "shutter",
        "friendly_name": "1010 Blackout",
        "supported_features": 15
      }
    },
    "cover.1011_blackout": {
      "entity_id": "cover.1011_blackout",
      "state": "closed",
      "attributes": {
        "current_position": 0,
        "device_class": "shutter",
        "friendly_name": "1011 Blackout",
        "supported_features": 15
      }
    },
    "cover.1012_blackout": {
      "entity_id": "cover.1012_blackout",
      "state": "open",
      "attributes": {
        "current_position": 75,
        "device_class": "shutter",
        "friendly_name": "1012 Blackout",
        "supported_features": 15
      }
    },
    "cover.1013_blackout": {
      "entity_id": "cover.1013_blackout",
      "state": "closed",
      "attributes": {
        "current_position": 0,
        "device_class": "shutter",
        "friendly_name": "1013 Blackout",
        "supported_features": 15
      }
    },
    "cover.1014_blackout": {
      "entity_id": "cover.1014_blackout",
      "state": "open",
      "attributes": {
        "current_position": 50,
        "device_class": "shutter",
        "friendly_name": "1014 Blackout",
        "supported_features": 15
      }
    },
    "cover.1015_blackout": {
      "entity_id": "cover.1015_blackout",
      "state": "open",
      "attributes": {
        "current_position": 30,
        "device_class": "shutter",
        "friendly_name": "1015 Blackout",
        "supported_features": 15
      }
    },
    "cover.1016_blackout": {
      "entity_id": "cover.1016_blackout",
      "state": "closed",
      "attributes": {
        "current_position": 0,
        "device_class": "shutter",
        "friendly_name": "1016 Blackout",
        "supported_features": 15
      }
    },
    "cover.1017_blackout": {
      "entity_id": "cover.1017_blackout",
      "state": "open",
      "attributes": {
        "current_position": 85,
        "device_class": "shutter",
        "friendly_name": "1017 Blackout",
        "supported_features": 15
      }
    },
    "cover.1018_blackout": {
      "entity_id": "cover.1018_blackout",
      "state": "open",
      "attributes": {
        "current_position": 65,
        "device_class": "shutter",
        "friendly_name": "1018 Blackout",
        "supported_features": 15
      }
    },
    "cover.living_room_garden_shutter": {
      entity_id: "cover.living_room_garden_shutter",
      state: "open",
      attributes: {
        current_position: 100,
        device_class: "shutter",
        friendly_name: "Living room garden shutter",
        supported_features: 15,
      },
    },
    "cover.living_room_graveyard_shutter": {
      entity_id: "cover.living_room_graveyard_shutter",
      state: "open",
      attributes: {
        current_position: 100,
        device_class: "shutter",
        friendly_name: "Living room graveyard shutter",
        supported_features: 15,
      },
    },
    "cover.living_room_left_shutter": {
      entity_id: "cover.living_room_left_shutter",
      state: "open",
      attributes: {
        current_position: 100,
        device_class: "shutter",
        friendly_name: "Living room left shutter",
        supported_features: 15,
      },
    },
    "cover.living_room_right_shutter": {
      entity_id: "cover.living_room_right_shutter",
      state: "open",
      attributes: {
        current_position: 100,
        device_class: "shutter",
        friendly_name: "Living room right shutter",
        supported_features: 15,
      },
    },
    "light.floor_lamp": {
      entity_id: "light.floor_lamp",
      state: "on",
      attributes: {
        min_color_temp_kelvin: 2000,
        max_color_temp_kelvin: 6535,
        min_mireds: 153,
        max_mireds: 500,
        supported_color_modes: ["color_temp", "xy"],
        color_mode: "color_temp",
        brightness: 178,
        color_temp_kelvin: 2583,
        color_temp: 387,
        hs_color: [28.664, 69.597],
        rgb_color: [255, 162, 77],
        xy_color: [0.538, 0.389],
        icon: "mdi:floor-lamp",
        friendly_name: "Floor lamp",
        supported_features: 44,
      },
    },
    "light.1010_bedroom_lights": {
      "entity_id": "light.1010_bedroom_lights",
      "state": "on",
      "attributes": {
        "supported_color_modes": ["brightness"],
        "color_mode": "brightness",
        "brightness": 126,
        "icon": "mdi:ceiling-light-multiple",
        "friendly_name": "1010 Bedroom Lights",
        "supported_features": 32
      }
    },
    "light.1011_bedroom_lights": {
      "entity_id": "light.1011_bedroom_lights",
      "state": "off",
      "attributes": {
        "supported_color_modes": ["brightness"],
        "color_mode": "brightness",
        "brightness": 0,
        "icon": "mdi:ceiling-light-multiple",
        "friendly_name": "1011 Bedroom Lights",
        "supported_features": 32
      }
    },
    "light.1012_bedroom_lights": {
      "entity_id": "light.1012_bedroom_lights",
      "state": "on",
      "attributes": {
        "supported_color_modes": ["brightness"],
        "color_mode": "brightness",
        "brightness": 200,
        "icon": "mdi:ceiling-light-multiple",
        "friendly_name": "1012 Bedroom Lights",
        "supported_features": 32
      }
    },
    "light.1013_bedroom_lights": {
      "entity_id": "light.1013_bedroom_lights",
      "state": "off",
      "attributes": {
        "supported_color_modes": ["brightness"],
        "color_mode": "brightness",
        "brightness": 0,
        "icon": "mdi:ceiling-light-multiple",
        "friendly_name": "1013 Bedroom Lights",
        "supported_features": 32
      }
    },
    "light.1014_bedroom_lights": {
      "entity_id": "light.1014_bedroom_lights",
      "state": "on",
      "attributes": {
        "supported_color_modes": ["brightness"],
        "color_mode": "brightness",
        "brightness": 255,
        "icon": "mdi:ceiling-light-multiple",
        "friendly_name": "1014 Bedroom Lights",
        "supported_features": 32
      }
    },
    "light.1015_bedroom_lights": {
      "entity_id": "light.1015_bedroom_lights",
      "state": "on",
      "attributes": {
        "supported_color_modes": ["brightness"],
        "color_mode": "brightness",
        "brightness": 75,
        "icon": "mdi:ceiling-light-multiple",
        "friendly_name": "1015 Bedroom Lights",
        "supported_features": 32
      }
    },
    "light.1016_bedroom_lights": {
      "entity_id": "light.1016_bedroom_lights",
      "state": "off",
      "attributes": {
        "supported_color_modes": ["brightness"],
        "color_mode": "brightness",
        "brightness": 0,
        "icon": "mdi:ceiling-light-multiple",
        "friendly_name": "1016 Bedroom Lights",
        "supported_features": 32
      }
    },
    "light.1017_bedroom_lights": {
      "entity_id": "light.1017_bedroom_lights",
      "state": "on",
      "attributes": {
        "supported_color_modes": ["brightness"],
        "color_mode": "brightness",
        "brightness": 180,
        "icon": "mdi:ceiling-light-multiple",
        "friendly_name": "1017 Bedroom Lights",
        "supported_features": 32
      }
    },
    "light.1018_bedroom_lights": {
      "entity_id": "light.1018_bedroom_lights",
      "state": "on",
      "attributes": {
        "supported_color_modes": ["brightness"],
        "color_mode": "brightness",
        "brightness": 100,
        "icon": "mdi:ceiling-light-multiple",
        "friendly_name": "1018 Bedroom Lights",
        "supported_features": 32
      }
    },
    "light.living_room_spotlights": {
      entity_id: "light.living_room_spotlights",
      state: "on",
      attributes: {
        supported_color_modes: ["brightness"],
        color_mode: "brightness",
        brightness: 126,
        icon: "mdi:ceiling-light-multiple",
        friendly_name: "Living room spotlights",
        supported_features: 32,
      },
    },
    "light.1010_left_reading_light": {
      "entity_id": "light.1010_left_reading_light",
      "state": "on",
      "attributes": {
        "supported_color_modes": ["brightness"],
        "color_mode": "brightness",
        "brightness": 126,
        "icon": "mdi:lamp",
        "friendly_name": "1010 Left Reading Light",
        "supported_features": 32
      }
    },
    "light.1010_right_reading_light": {
      "entity_id": "light.1010_right_reading_light",
      "state": "off",
      "attributes": {
        "supported_color_modes": ["brightness"],
        "color_mode": "brightness",
        "brightness": 0,
        "icon": "mdi:lamp",
        "friendly_name": "1010 Right Reading Light",
        "supported_features": 32
      }
    },
    "light.1011_left_reading_light": {
      "entity_id": "light.1011_left_reading_light",
      "state": "on",
      "attributes": {
        "supported_color_modes": ["brightness"],
        "color_mode": "brightness",
        "brightness": 150,
        "icon": "mdi:lamp",
        "friendly_name": "1011 Left Reading Light",
        "supported_features": 32
      }
    },
    "light.1011_right_reading_light": {
      "entity_id": "light.1011_right_reading_light",
      "state": "off",
      "attributes": {
        "supported_color_modes": ["brightness"],
        "color_mode": "brightness",
        "brightness": 0,
        "icon": "mdi:lamp",
        "friendly_name": "1011 Right Reading Light",
        "supported_features": 32
      }
    },
    "light.1012_left_reading_light": {
      "entity_id": "light.1012_left_reading_light",
      "state": "on",
      "attributes": {
        "supported_color_modes": ["brightness"],
        "color_mode": "brightness",
        "brightness": 180,
        "icon": "mdi:lamp",
        "friendly_name": "1012 Left Reading Light",
        "supported_features": 32
      }
    },
    "light.1012_right_reading_light": {
      "entity_id": "light.1012_right_reading_light",
      "state": "off",
      "attributes": {
        "supported_color_modes": ["brightness"],
        "color_mode": "brightness",
        "brightness": 0,
        "icon": "mdi:lamp",
        "friendly_name": "1012 Right Reading Light",
        "supported_features": 32
      }
    },
    "light.1013_left_reading_light": {
      "entity_id": "light.1013_left_reading_light",
      "state": "on",
      "attributes": {
        "supported_color_modes": ["brightness"],
        "color_mode": "brightness",
        "brightness": 200,
        "icon": "mdi:lamp",
        "friendly_name": "1013 Left Reading Light",
        "supported_features": 32
      }
    },
    "light.1013_right_reading_light": {
      "entity_id": "light.1013_right_reading_light",
      "state": "off",
      "attributes": {
        "supported_color_modes": ["brightness"],
        "color_mode": "brightness",
        "brightness": 0,
        "icon": "mdi:lamp",
        "friendly_name": "1013 Right Reading Light",
        "supported_features": 32
      }
    },
    "light.1014_left_reading_light": {
      "entity_id": "light.1014_left_reading_light",
      "state": "on",
      "attributes": {
        "supported_color_modes": ["brightness"],
        "color_mode": "brightness",
        "brightness": 220,
        "icon": "mdi:lamp",
        "friendly_name": "1014 Left Reading Light",
        "supported_features": 32
      }
    },
    "light.1014_right_reading_light": {
      "entity_id": "light.1014_right_reading_light",
      "state": "off",
      "attributes": {
        "supported_color_modes": ["brightness"],
        "color_mode": "brightness",
        "brightness": 0,
        "icon": "mdi:lamp",
        "friendly_name": "1014 Right Reading Light",
        "supported_features": 32
      }
    },
    "light.1015_left_reading_light": {
      "entity_id": "light.1015_left_reading_light",
      "state": "on",
      "attributes": {
        "supported_color_modes": ["brightness"],
        "color_mode": "brightness",
        "brightness": 255,
        "icon": "mdi:lamp",
        "friendly_name": "1015 Left Reading Light",
        "supported_features": 32
      }
    },
    "light.1015_right_reading_light": {
      "entity_id": "light.1015_right_reading_light",
      "state": "off",
      "attributes": {
        "supported_color_modes": ["brightness"],
        "color_mode": "brightness",
        "brightness": 0,
        "icon": "mdi:lamp",
        "friendly_name": "1015 Right Reading Light",
        "supported_features": 32
      }
    },
    "light.1016_left_reading_light": {
      "entity_id": "light.1016_left_reading_light",
      "state": "on",
      "attributes": {
        "supported_color_modes": ["brightness"],
        "color_mode": "brightness",
        "brightness": 75,
        "icon": "mdi:lamp",
        "friendly_name": "1016 Left Reading Light",
        "supported_features": 32
      }
    },
    "light.1016_right_reading_light": {
      "entity_id": "light.1016_right_reading_light",
      "state": "off",
      "attributes": {
        "supported_color_modes": ["brightness"],
        "color_mode": "brightness",
        "brightness": 0,
        "icon": "mdi:lamp",
        "friendly_name": "1016 Right Reading Light",
        "supported_features": 32
      }
    },
    "light.1017_left_reading_light": {
      "entity_id": "light.1017_left_reading_light",
      "state": "on",
      "attributes": {
        "supported_color_modes": ["brightness"],
        "color_mode": "brightness",
        "brightness": 180,
        "icon": "mdi:lamp",
        "friendly_name": "1017 Left Reading Light",
        "supported_features": 32
      }
    },
    "light.1017_right_reading_light": {
      "entity_id": "light.1017_right_reading_light",
      "state": "off",
      "attributes": {
        "supported_color_modes": ["brightness"],
        "color_mode": "brightness",
        "brightness": 0,
        "icon": "mdi:lamp",
        "friendly_name": "1017 Right Reading Light",
        "supported_features": 32
      }
    },
    "light.1018_left_reading_light": {
      "entity_id": "light.1018_left_reading_light",
      "state": "on",
      "attributes": {
        "supported_color_modes": ["brightness"],
        "color_mode": "brightness",
        "brightness": 100,
        "icon": "mdi:lamp",
        "friendly_name": "1018 Left Reading Light",
        "supported_features": 32
      }
    },
    "light.1018_right_reading_light": {
      "entity_id": "light.1018_right_reading_light",
      "state": "off",
      "attributes": {
        "supported_color_modes": ["brightness"],
        "color_mode": "brightness",
        "brightness": 0,
        "icon": "mdi:lamp",
        "friendly_name": "1018 Right Reading Light",
        "supported_features": 32
      }
    },
    "light.1010_minibar_lamp": {
      "entity_id": "light.1010_minibar_lamp",
      "state": "on",
      "attributes": {
        "min_color_temp_kelvin": 2202,
        "max_color_temp_kelvin": 4504,
        "min_mireds": 222,
        "max_mireds": 454,
        "effect_list": ["None", "candle"],
        "supported_color_modes": ["color_temp"],
        "effect": "None",
        "color_mode": "color_temp",
        "brightness": 200,
        "color_temp_kelvin": 3000,
        "color_temp": 333,
        "hs_color": null,
        "rgb_color": null,
        "xy_color": null,
        "mode": "normal",
        "dynamics": "none",
        "icon": "mdi:lightbulb-variant",
        "friendly_name": "1010 Minibar Lamp",
        "supported_features": 44
      }
    },
    "light.1011_minibar_lamp": {
      "entity_id": "light.1011_minibar_lamp",
      "state": "off",
      "attributes": {
        "min_color_temp_kelvin": 2202,
        "max_color_temp_kelvin": 4504,
        "min_mireds": 222,
        "max_mireds": 454,
        "effect_list": ["None", "candle"],
        "supported_color_modes": ["color_temp"],
        "effect": null,
        "color_mode": null,
        "brightness": null,
        "color_temp_kelvin": null,
        "color_temp": null,
        "hs_color": null,
        "rgb_color": null,
        "xy_color": null,
        "mode": "normal",
        "dynamics": "none",
        "icon": "mdi:lightbulb-variant",
        "friendly_name": "1011 Minibar Lamp",
        "supported_features": 44
      }
    },
    "light.1012_minibar_lamp": {
      "entity_id": "light.1012_minibar_lamp",
      "state": "on",
      "attributes": {
        "min_color_temp_kelvin": 2202,
        "max_color_temp_kelvin": 4504,
        "min_mireds": 222,
        "max_mireds": 454,
        "effect_list": ["None", "candle"],
        "supported_color_modes": ["color_temp"],
        "effect": "candle",
        "color_mode": "color_temp",
        "brightness": 180,
        "color_temp_kelvin": 3500,
        "color_temp": 286,
        "hs_color": null,
        "rgb_color": null,
        "xy_color": null,
        "mode": "normal",
        "dynamics": "none",
        "icon": "mdi:lightbulb-variant",
        "friendly_name": "1012 Minibar Lamp",
        "supported_features": 44
      }
    },
    "light.1013_minibar_lamp": {
      "entity_id": "light.1013_minibar_lamp",
      "state": "off",
      "attributes": {
        "min_color_temp_kelvin": 2202,
        "max_color_temp_kelvin": 4504,
        "min_mireds": 222,
        "max_mireds": 454,
        "effect_list": ["None", "candle"],
        "supported_color_modes": ["color_temp"],
        "effect": null,
        "color_mode": null,
        "brightness": null,
        "color_temp_kelvin": null,
        "color_temp": null,
        "hs_color": null,
        "rgb_color": null,
        "xy_color": null,
        "mode": "normal",
        "dynamics": "none",
        "icon": "mdi:lightbulb-variant",
        "friendly_name": "1013 Minibar Lamp",
        "supported_features": 44
      }
    },
    "light.1014_minibar_lamp": {
      "entity_id": "light.1014_minibar_lamp",
      "state": "on",
      "attributes": {
        "min_color_temp_kelvin": 2202,
        "max_color_temp_kelvin": 4504,
        "min_mireds": 222,
        "max_mireds": 454,
        "effect_list": ["None", "candle"],
        "supported_color_modes": ["color_temp"],
        "effect": "None",
        "color_mode": "color_temp",
        "brightness": 220,
        "color_temp_kelvin": 2800,
        "color_temp": 357,
        "hs_color": null,
        "rgb_color": null,
        "xy_color": null,
        "mode": "normal",
        "dynamics": "none",
        "icon": "mdi:lightbulb-variant",
        "friendly_name": "1014 Minibar Lamp",
        "supported_features": 44
      }
    },
    "light.1015_minibar_lamp": {
      "entity_id": "light.1015_minibar_lamp",
      "state": "off",
      "attributes": {
        "min_color_temp_kelvin": 2202,
        "max_color_temp_kelvin": 4504,
        "min_mireds": 222,
        "max_mireds": 454,
        "effect_list": ["None", "candle"],
        "supported_color_modes": ["color_temp"],
        "effect": null,
        "color_mode": null,
        "brightness": null,
        "color_temp_kelvin": null,
        "color_temp": null,
        "hs_color": null,
        "rgb_color": null,
        "xy_color": null,
        "mode": "normal",
        "dynamics": "none",
        "icon": "mdi:lightbulb-variant",
        "friendly_name": "1015 Minibar Lamp",
        "supported_features": 44
      }
    },
    "light.1016_minibar_lamp": {
      "entity_id": "light.1016_minibar_lamp",
      "state": "on",
      "attributes": {
        "min_color_temp_kelvin": 2202,
        "max_color_temp_kelvin": 4504,
        "min_mireds": 222,
        "max_mireds": 454,
        "effect_list": ["None", "candle"],
        "supported_color_modes": ["color_temp"],
        "effect": "candle",
        "color_mode": "color_temp",
        "brightness": 255,
        "color_temp_kelvin": 4000,
        "color_temp": 250,
        "hs_color": null,
        "rgb_color": null,
        "xy_color": null,
        "mode": "normal",
        "dynamics": "none",
        "icon": "mdi:lightbulb-variant",
        "friendly_name": "1016 Minibar Lamp",
        "supported_features": 44
      }
    },
    "light.1017_minibar_lamp": {
      "entity_id": "light.1017_minibar_lamp",
      "state": "off",
      "attributes": {
        "min_color_temp_kelvin": 2202,
        "max_color_temp_kelvin": 4504,
        "min_mireds": 222,
        "max_mireds": 454,
        "effect_list": ["None", "candle"],
        "supported_color_modes": ["color_temp"],
        "effect": null,
        "color_mode": null,
        "brightness": null,
        "color_temp_kelvin": null,
        "color_temp": null,
        "hs_color": null,
        "rgb_color": null,
        "xy_color": null,
        "mode": "normal",
        "dynamics": "none",
        "icon": "mdi:lightbulb-variant",
        "friendly_name": "1017 Minibar Lamp",
        "supported_features": 44
      }
    },
    "light.1018_minibar_lamp": {
      "entity_id": "light.1018_minibar_lamp",
      "state": "on",
      "attributes": {
        "min_color_temp_kelvin": 2202,
        "max_color_temp_kelvin": 4504,
        "min_mireds": 222,
        "max_mireds": 454,
        "effect_list": ["None", "candle"],
        "supported_color_modes": ["color_temp"],
        "effect": "None",
        "color_mode": "color_temp",
        "brightness": 100,
        "color_temp_kelvin": 2700,
        "color_temp": 370,
        "hs_color": null,
        "rgb_color": null,
        "xy_color": null,
        "mode": "normal",
        "dynamics": "none",
        "icon": "mdi:lightbulb-variant",
        "friendly_name": "1018 Minibar Lamp",
        "supported_features": 44
      }
    },
    "light.bar_lamp": {
      entity_id: "light.bar_lamp",
      state: "on",
      attributes: {
        min_color_temp_kelvin: 2202,
        max_color_temp_kelvin: 4504,
        min_mireds: 222,
        max_mireds: 454,
        effect_list: ["None", "candle"],
        supported_color_modes: ["color_temp"],
        effect: null,
        color_mode: null,
        brightness: null,
        color_temp_kelvin: null,
        color_temp: null,
        hs_color: null,
        rgb_color: null,
        xy_color: null,
        mode: "normal",
        dynamics: "none",
        icon: "mdi:lightbulb-variant",
        friendly_name: "Bar lamp",
        supported_features: 44,
      },
    },
    "sensor.1010_room_humidity": {
      "entity_id": "sensor.1010_room_humidity",
      "state": "42",
      "attributes": {
        "state_class": "measurement",
        "unit_of_measurement": "%",
        "device_class": "humidity",
        "friendly_name": "1010 Room Humidity"
      }
    },
    "sensor.1011_room_humidity": {
      "entity_id": "sensor.1011_room_humidity",
      "state": "45",
      "attributes": {
        "state_class": "measurement",
        "unit_of_measurement": "%",
        "device_class": "humidity",
        "friendly_name": "1011 Room Humidity"
      }
    },
    "sensor.1012_room_humidity": {
      "entity_id": "sensor.1012_room_humidity",
      "state": "47",
      "attributes": {
        "state_class": "measurement",
        "unit_of_measurement": "%",
        "device_class": "humidity",
        "friendly_name": "1012 Room Humidity"
      }
    },
    "sensor.1013_room_humidity": {
      "entity_id": "sensor.1013_room_humidity",
      "state": "43",
      "attributes": {
        "state_class": "measurement",
        "unit_of_measurement": "%",
        "device_class": "humidity",
        "friendly_name": "1013 Room Humidity"
      }
    },
    "sensor.1014_room_humidity": {
      "entity_id": "sensor.1014_room_humidity",
      "state": "50",
      "attributes": {
        "state_class": "measurement",
        "unit_of_measurement": "%",
        "device_class": "humidity",
        "friendly_name": "1014 Room Humidity"
      }
    },
    "sensor.1015_room_humidity": {
      "entity_id": "sensor.1015_room_humidity",
      "state": "44",
      "attributes": {
        "state_class": "measurement",
        "unit_of_measurement": "%",
        "device_class": "humidity",
        "friendly_name": "1015 Room Humidity"
      }
    },
    "sensor.1016_room_humidity": {
      "entity_id": "sensor.1016_room_humidity",
      "state": "46",
      "attributes": {
        "state_class": "measurement",
        "unit_of_measurement": "%",
        "device_class": "humidity",
        "friendly_name": "1016 Room Humidity"
      }
    },
    "sensor.1017_room_humidity": {
      "entity_id": "sensor.1017_room_humidity",
      "state": "41",
      "attributes": {
        "state_class": "measurement",
        "unit_of_measurement": "%",
        "device_class": "humidity",
        "friendly_name": "1017 Room Humidity"
      }
    },
    "sensor.1018_room_humidity": {
      "entity_id": "sensor.1018_room_humidity",
      "state": "48",
      "attributes": {
        "state_class": "measurement",
        "unit_of_measurement": "%",
        "device_class": "humidity",
        "friendly_name": "1018 Room Humidity"
      }
    },
    "sensor.1010_room_temperature": {
      entity_id: "sensor.1010_room_temperature",
      state: "22.8",
      attributes: {
        state_class: "measurement",
        unit_of_measurement: "°C",
        device_class: "temperature",
        friendly_name: "1010 Room Temperature",
      },
    },
    "sensor.1011_room_temperature": {
      entity_id: "sensor.1011_room_temperature",
      state: "23.4",
      attributes: {
        state_class: "measurement",
        unit_of_measurement: "°C",
        device_class: "temperature",
        friendly_name: "1011 Room Temperature",
      },
    },
    "sensor.1012_room_temperature": {
      entity_id: "sensor.1012_room_temperature",
      state: "24.0",
      attributes: {
        state_class: "measurement",
        unit_of_measurement: "°C",
        device_class: "temperature",
        friendly_name: "1012 Room Temperature",
      },
    },
    "sensor.1013_room_temperature": {
      entity_id: "sensor.1013_room_temperature",
      state: "21.7",
      attributes: {
        state_class: "measurement",
        unit_of_measurement: "°C",
        device_class: "temperature",
        friendly_name: "1013 Room Temperature",
      },
    },
    "sensor.1014_room_temperature": {
      entity_id: "sensor.1014_room_temperature",
      state: "25.2",
      attributes: {
        state_class: "measurement",
        unit_of_measurement: "°C",
        device_class: "temperature",
        friendly_name: "1014 Room Temperature",
      },
    },
    "sensor.1015_room_temperature": {
      entity_id: "sensor.1015_room_temperature",
      state: "22.3",
      attributes: {
        state_class: "measurement",
        unit_of_measurement: "°C",
        device_class: "temperature",
        friendly_name: "1015 Room Temperature",
      },
    },
    "sensor.1016_room_temperature": {
      entity_id: "sensor.1016_room_temperature",
      state: "23.9",
      attributes: {
        state_class: "measurement",
        unit_of_measurement: "°C",
        device_class: "temperature",
        friendly_name: "1016 Room Temperature",
      },
    },
    "sensor.1017_room_temperature": {
      entity_id: "sensor.1017_room_temperature",
      state: "21.0",
      attributes: {
        state_class: "measurement",
        unit_of_measurement: "°C",
        device_class: "temperature",
        friendly_name: "1017 Room Temperature",
      },
    },
    "sensor.1018_room_temperature": {
      entity_id: "sensor.1018_room_temperature",
      state: "24.5",
      attributes: {
        state_class: "measurement",
        unit_of_measurement: "°C",
        device_class: "temperature",
        friendly_name: "1018 Room Temperature",
      },
    },
    "sensor.living_room_temperature": {
      entity_id: "sensor.living_room_temperature",
      state: "22.8",
      attributes: {
        state_class: "measurement",
        unit_of_measurement: "°C",
        device_class: "temperature",
        friendly_name: "Living room Temperature",
      },
    },
    "media_player.living_room_nest_mini": {
      entity_id: "media_player.living_room_nest_mini",
      state: "off",
      attributes: {
        device_class: "speaker",
        friendly_name: "Living room Nest Mini",
        supported_features: 152461,
      },
    },
    "cover.kitchen_shutter": {
      entity_id: "cover.kitchen_shutter",
      state: "open",
      attributes: {
        current_position: 100,
        device_class: "shutter",
        friendly_name: "Kitchen shutter ",
        supported_features: 15,
      },
    },
    "light.kitchen_spotlights": {
      entity_id: "light.kitchen_spotlights",
      state: "off",
      attributes: {
        supported_color_modes: ["brightness"],
        color_mode: null,
        brightness: null,
        icon: "mdi:ceiling-light-multiple",
        friendly_name: "Kitchen spotlights ",
        supported_features: 32,
      },
    },
    "light.worktop_spotlights": {
      entity_id: "light.worktop_spotlights",
      state: "off",
      attributes: {
        supported_color_modes: ["brightness"],
        color_mode: null,
        brightness: null,
        icon: "mdi:ceiling-light-multiple",
        friendly_name: "Worktop spotlights ",
        supported_features: 32,
      },
    },
    "binary_sensor.fridge_door": {
      entity_id: "binary_sensor.fridge_door",
      state: "off",
      attributes: {
        device_class: "door",
        icon: "mdi:fridge",
        friendly_name: "Fridge door",
      },
    },
    "media_player.kitchen_nest_audio": {
      entity_id: "media_player.kitchen_nest_audio",
      state: "on",
      attributes: {
        device_class: "speaker",
        friendly_name: "Kitchen Nest Audio",
        supported_features: 152461,
      },
    },
    "binary_sensor.tesla_wall_connector_vehicle_connected": {
      entity_id: "binary_sensor.tesla_wall_connector_vehicle_connected",
      state: "off",
      attributes: {
        device_class: "plug",
        friendly_name: "Wall Connector Vehicle connected",
      },
    },
    "sensor.tesla_wall_connector_session_energy": {
      entity_id: "sensor.tesla_wall_connector_session_energy",
      state: "16.3",
      attributes: {
        state_class: "total_increasing",
        unit_of_measurement: "kWh",
        device_class: "energy",
        friendly_name: "Tesla Wall Connector Session energy",
      },
    },
    "sensor.electric_meter_power": {
      entity_id: "sensor.electric_meter_power",
      state: "797.86",
      attributes: {
        state_class: "measurement",
        unit_of_measurement: "W",
        device_class: "power",
        icon: "mdi:meter-electric",
        friendly_name: "Electric meter Power",
      },
    },
    "sensor.eletric_meter_voltage": {
      entity_id: "sensor.eletric_meter_voltage",
      state: "232.19",
      attributes: {
        state_class: "measurement",
        unit_of_measurement: "V",
        device_class: "voltage",
        friendly_name: "Electric meter voltage",
      },
    },
    "sensor.electricity_maps_grid_fossil_fuel_percentage": {
      entity_id: "sensor.electricity_maps_grid_fossil_fuel_percentage",
      state: "9.84",
      attributes: {
        state_class: "measurement",
        country_code: "FR",
        unit_of_measurement: "%",
        attribution: "Data provided by Electricity Maps",
        icon: "mdi:barrel",
        friendly_name: "Electricity Maps Grid fossil fuel percentage",
      },
    },
    "sensor.electricity_maps_co2_intensity": {
      entity_id: "sensor.electricity_maps_co2_intensity",
      state: "62.0",
      attributes: {
        state_class: "measurement",
        country_code: "FR",
        unit_of_measurement: "gCO2eq/kWh",
        attribution: "Data provided by Electricity Maps",
        friendly_name: "Electricity Maps CO2 intensity",
        icon: "mdi:molecule-co2",
      },
    },
    "sun.sun": {
      entity_id: "sun.sun",
      state: "above_horizon",
      attributes: {
        next_dawn: "2024-03-05T05:50:21.964405+00:00",
        next_dusk: "2024-03-04T18:08:54.311334+00:00",
        next_midnight: "2024-03-05T00:00:00+00:00",
        next_noon: "2024-03-05T12:00:05+00:00",
        next_rising: "2024-03-05T06:23:42.739159+00:00",
        next_setting: "2024-03-04T17:35:26.271171+00:00",
        elevation: 30.38,
        azimuth: 204.42,
        rising: false,
        friendly_name: "Sun",
      },
    },
    "sensor.rain": {
      entity_id: "sensor.moon_phase",
      state: "7.2",
      attributes: {
        state_class: "total_increasing",
        unit_of_measurement: "mm",
        device_class: "precipitation",
        friendly_name: "Rain",
      },
    },
    "climate.1010": {
      entity_id: "climate.1010",
      state: "cool",
      attributes: {
        hvac_modes: ["auto", "cool", "heat", "off"],
        min_temp: 18,
        max_temp: 30,
        preset_modes: [
          "comfort",
          "away",
          "eco",
          "frost_protection",
          "external",
          "home",
        ],
        current_temperature: 24.8,
        temperature: 22,
        preset_mode: "comfort",
        icon: "mdi:home-floor-0",
        friendly_name: "1010 Room Thermostat",
        supported_features: 401,
      },
    },
    "climate.1011": {
      "entity_id": "climate.1011",
      "state": "heat",
      "attributes": {
        "hvac_modes": ["auto", "cool", "heat", "off"],
        "min_temp": 18,
        "max_temp": 30,
        "preset_modes": [
          "comfort",
          "away",
          "eco",
          "frost_protection",
          "external",
          "home"
        ],
        "current_temperature": 26.1,
        "temperature": 23,
        "preset_mode": "comfort",
        "icon": "mdi:home-floor-1",
        "friendly_name": "1011 Room Thermostat",
        "supported_features": 401
      }
    },
    "climate.1012": {
      "entity_id": "climate.1012",
      "state": "off",
      "attributes": {
        "hvac_modes": ["auto", "cool", "heat", "off"],
        "min_temp": 18,
        "max_temp": 30,
        "preset_modes": [
          "comfort",
          "away",
          "eco",
          "frost_protection",
          "external",
          "home"
        ],
        "current_temperature": 25.4,
        "temperature": 24,
        "preset_mode": "eco",
        "icon": "mdi:home-floor-2",
        "friendly_name": "1012 Room Thermostat",
        "supported_features": 401
      }
    },
    "climate.1013": {
      "entity_id": "climate.1013",
      "state": "auto",
      "attributes": {
        "hvac_modes": ["auto", "cool", "heat", "off"],
        "min_temp": 18,
        "max_temp": 30,
        "preset_modes": [
          "comfort",
          "away",
          "eco",
          "frost_protection",
          "external",
          "home"
        ],
        "current_temperature": 22.7,
        "temperature": 21,
        "preset_mode": "home",
        "icon": "mdi:home-floor-3",
        "friendly_name": "1013 Room Thermostat",
        "supported_features": 401
      }
    },
    "climate.1014": {
      "entity_id": "climate.1014",
      "state": "cool",
      "attributes": {
        "hvac_modes": ["auto", "cool", "heat", "off"],
        "min_temp": 18,
        "max_temp": 30,
        "preset_modes": [
          "comfort",
          "away",
          "eco",
          "frost_protection",
          "external",
          "home"
        ],
        "current_temperature": 28.0,
        "temperature": 25,
        "preset_mode": "external",
        "icon": "mdi:home-floor-4",
        "friendly_name": "1014 Room Thermostat",
        "supported_features": 401
      }
    },
    "climate.1015": {
      "entity_id": "climate.1015",
      "state": "heat",
      "attributes": {
        "hvac_modes": ["auto", "cool", "heat", "off"],
        "min_temp": 18,
        "max_temp": 30,
        "preset_modes": [
          "comfort",
          "away",
          "eco",
          "frost_protection",
          "external",
          "home"
        ],
        "current_temperature": 20.5,
        "temperature": 22,
        "preset_mode": "frost_protection",
        "icon": "mdi:home-floor-5",
        "friendly_name": "1015 Room Thermostat",
        "supported_features": 401
      }
    },
    "climate.1016": {
      "entity_id": "climate.1016",
      "state": "auto",
      "attributes": {
        "hvac_modes": ["auto", "cool", "heat", "off"],
        "min_temp": 18,
        "max_temp": 30,
        "preset_modes": [
          "comfort",
          "away",
          "eco",
          "frost_protection",
          "external",
          "home"
        ],
        "current_temperature": 23.6,
        "temperature": 21,
        "preset_mode": "home",
        "icon": "mdi:home-floor-6",
        "friendly_name": "1016 Room Thermostat",
        "supported_features": 401
      }
    },
    "climate.1017": {
      "entity_id": "climate.1017",
      "state": "cool",
      "attributes": {
        "hvac_modes": ["auto", "cool", "heat", "off"],
        "min_temp": 18,
        "max_temp": 30,
        "preset_modes": [
          "comfort",
          "away",
          "eco",
          "frost_protection",
          "external",
          "home"
        ],
        "current_temperature": 27.4,
        "temperature": 24,
        "preset_mode": "comfort",
        "icon": "mdi:home-floor-7",
        "friendly_name": "1017 Room Thermostat",
        "supported_features": 401
      }
    },
    "climate.1018": {
      "entity_id": "climate.1018",
      "state": "heat",
      "attributes": {
        "hvac_modes": ["auto", "cool", "heat", "off"],
        "min_temp": 18,
        "max_temp": 30,
        "preset_modes": [
          "comfort",
          "away",
          "eco",
          "frost_protection",
          "external",
          "home"
        ],
        "current_temperature": 21.9,
        "temperature": 23,
        "preset_mode": "away",
        "icon": "mdi:home-floor-8",
        "friendly_name": "1018 Room Thermostat",
        "supported_features": 401
      }
    },
    "cover.study_shutter": {
      entity_id: "cover.study_shutter",
      state: "open",
      attributes: {
        current_position: 100,
        device_class: "shutter",
        friendly_name: "Study shutter",
        supported_features: 15,
      },
    },
    "light.study_spotlights": {
      entity_id: "light.study_spotlights",
      state: "off",
      attributes: {
        supported_color_modes: ["brightness"],
        color_mode: null,
        brightness: null,
        icon: "mdi:ceiling-light-multiple",
        friendly_name: "Study spotlights",
        supported_features: 32,
      },
    },
    "media_player.study_nest_hub": {
      entity_id: "media_player.study_nest_hub",
      state: "off",
      attributes: {
        friendly_name: "Study Nest Hub",
        supported_features: 152461,
      },
    },
    "sensor.standing_desk_height": {
      entity_id: "sensor.standing_desk_height",
      state: "72",
      attributes: {
        unit_of_measurement: "cm",
        icon: "mdi:tape-measure",
        friendly_name: "Standing desk Height",
      },
    },
    "light.outdoor_light": {
      entity_id: "light.outdoor_light",
      state: "on",
      attributes: {
        supported_color_modes: ["brightness"],
        color_mode: null,
        brightness: 255,
        icon: "mdi:outdoor-lamp",
        friendly_name: "Outdoor light",
        supported_features: 32,
      },
    },
    "light.flood_light": {
      entity_id: "light.flood_light",
      state: "off",
      attributes: {
        effect_list: ["None", "candle"],
        supported_color_modes: ["brightness"],
        effect: null,
        color_mode: null,
        brightness: null,
        mode: "normal",
        dynamics: "none",
        icon: "mdi:light-flood-down",
        friendly_name: "Flood light",
        supported_features: 44,
      },
    },
    "sensor.outdoor_motion_sensor_temperature": {
      entity_id: "sensor.outdoor_motion_sensor_temperature",
      state: "10.2",
      attributes: {
        state_class: "measurement",
        unit_of_measurement: "°C",
        device_class: "temperature",
        friendly_name: "Outdoor motion sensor Temperature",
      },
    },
    "binary_sensor.1010_guest_in_room": {
      "entity_id": "binary_sensor.1010_guest_in_room",
      "state": "off",
      "attributes": {
        "state_class": "measurement",
        "device_class": "motion",
        "friendly_name": "1010 Guest In Room"
      }
    },
    "binary_sensor.1011_guest_in_room": {
      "entity_id": "binary_sensor.1011_guest_in_room",
      "state": "on",
      "attributes": {
        "state_class": "measurement",
        "device_class": "motion",
        "friendly_name": "1011 Guest In Room"
      }
    },
    "binary_sensor.1012_guest_in_room": {
      "entity_id": "binary_sensor.1012_guest_in_room",
      "state": "off",
      "attributes": {
        "state_class": "measurement",
        "device_class": "motion",
        "friendly_name": "1012 Guest In Room"
      }
    },
    "binary_sensor.1013_guest_in_room": {
      "entity_id": "binary_sensor.1013_guest_in_room",
      "state": "on",
      "attributes": {
        "state_class": "measurement",
        "device_class": "motion",
        "friendly_name": "1013 Guest In Room"
      }
    },
    "binary_sensor.1014_guest_in_room": {
      "entity_id": "binary_sensor.1014_guest_in_room",
      "state": "off",
      "attributes": {
        "state_class": "measurement",
        "device_class": "motion",
        "friendly_name": "1014 Guest In Room"
      }
    },
    "binary_sensor.1015_guest_in_room": {
      "entity_id": "binary_sensor.1015_guest_in_room",
      "state": "on",
      "attributes": {
        "state_class": "measurement",
        "device_class": "motion",
        "friendly_name": "1015 Guest In Room"
      }
    },
    "binary_sensor.1016_guest_in_room": {
      "entity_id": "binary_sensor.1016_guest_in_room",
      "state": "off",
      "attributes": {
        "state_class": "measurement",
        "device_class": "motion",
        "friendly_name": "1016 Guest In Room"
      }
    },
    "binary_sensor.1017_guest_in_room": {
      "entity_id": "binary_sensor.1017_guest_in_room",
      "state": "on",
      "attributes": {
        "state_class": "measurement",
        "device_class": "motion",
        "friendly_name": "1017 Guest In Room"
      }
    },
    "binary_sensor.1018_guest_in_room": {
      "entity_id": "binary_sensor.1018_guest_in_room",
      "state": "off",
      "attributes": {
        "state_class": "measurement",
        "device_class": "motion",
        "friendly_name": "1018 Guest In Room"
      }
    },
    "binary_sensor.outdoor_motion_sensor_motion": {
      entity_id: "binary_sensor.outdoor_motion_sensor_motion",
      state: "off",
      attributes: {
        state_class: "measurement",
        device_class: "motion",
        friendly_name: "Outdoor motion sensor Motion",
      },
    },
    "sensor.outdoor_motion_sensor_illuminance": {
      entity_id: "sensor.outdoor_motion_sensor_illuminance",
      state: "555",
      attributes: {
        state_class: "measurement",
        light_level: 27444,
        unit_of_measurement: "lx",
        device_class: "illuminance",
        friendly_name: "Outdoor motion sensor Illuminance",
      },
    },
    "automation.home_assistant_auto_update": {
      entity_id: "automation.home_assistant_auto_update",
      state: "off",
      attributes: {
        id: "1700669321947",
        last_triggered: "2024-02-29T18:02:05.343139+00:00",
        mode: "queued",
        current: 0,
        max: 50,
        icon: "mdi:auto-mode",
        friendly_name: "eDashboard Auto-update",
      },
    },
    "update.home_assistant_operating_system_update": {
      entity_id: "update.home_assistant_operating_system_update",
      state: "off",
      attributes: {
        auto_update: false,
        installed_version: "12.1",
        in_progress: false,
        latest_version: "12.1",
        release_summary: null,
        release_url:
          "https://github.com/home-assistant/operating-system/commits/dev",
        skipped_version: null,
        title: "eDashboard Operating System",
        entity_picture:
          "https://brands.home-assistant.io/homeassistant/icon.png",
        friendly_name: "eDashboard Operating System Update",
        supported_features: 3,
      },
    },
    "update.home_assistant_supervisor_update": {
      entity_id: "update.home_assistant_supervisor_update",
      state: "off",
      attributes: {
        auto_update: true,
        installed_version: "2024.02.2",
        in_progress: false,
        latest_version: "2024.02.2",
        release_summary: null,
        release_url:
          "https://github.com/home-assistant/supervisor/commits/main",
        skipped_version: null,
        title: "eDashboard Supervisor",
        entity_picture: "https://brands.home-assistant.io/hassio/icon.png",
        friendly_name: "eDashboard Supervisor Update",
        supported_features: 1,
      },
    },
    "update.home_assistant_core_update": {
      entity_id: "update.home_assistant_supervisor_update",
      state: "off",
      attributes: {
        auto_update: false,
        installed_version: "2024.4.0",
        in_progress: false,
        latest_version: "2024.4.0",
        release_summary: null,
        release_url: "https://github.com/home-assistant/core/commits/dev",
        skipped_version: null,
        title: "eDashboard Core",
        entity_picture:
          "https://brands.home-assistant.io/homeassistant/icon.png",
        friendly_name: "eDashboard Core Update",
        supported_features: 11,
      },
    },
  });
