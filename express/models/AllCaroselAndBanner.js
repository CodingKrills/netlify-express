const mongoose = require('mongoose');

const allCaroselAndBanner = new mongoose.Schema({

    page_name: {
        type: String,
        required: true
    },

    grid_name: {
        type: String
    },

    // one will be from admin

    design_type: {
        type: String,
        default: false
    },

    // data e.g. img, text applied to , text color 

    data: [
        {
            img: { type: String, default: '' },
            text: [
                {
                    text_value: { type: String, default: '' },
                    text_color: { type: String, default: '' },
                    text_font_size: { type: Number, default: 0 }
                }
            ],
            applied_to: { type: String, default: '' },
            applied_to_id: { type: String, default: '' }
        }
    ],

    // country setting =================================

    country: [
        {
            country_name: { type: String },
            country_id: { type: String },
            country_code: { type: String },
        }
    ],

    // carosel config  ==========================================


    carosel_animation_time: { type: Number, default: 1000 },

    carosel_arrows: { type: Boolean, default: false },

    grid_height: { type: Number, default: 150 },


    // grid config  ==========================================

    total_number_of_grid: { type: Number, default: 1 },

    outside_grid_margin: {
        margin_top: { type: Number, default: 0 },
        margin_right: { type: Number, default: 0 },
        margin_bottom: { type: Number, default: 0 },
        margin_left: { type: Number, default: 0 }
    },

    is_grid_have_text_area: { type: Boolean, default: false },

    grid_text_area_location: { type: String, default: "Bottom" },

    grid_text_area_height: { type: Number },

    grid_image_height: { type: Number },

    grid_text_area_bg_color: { type: String, default: "#FFFFFF" },

    grid_text_area_opacity: { type: Number, default: 1 },

    is_grid_border: { type: Boolean, default: false },

    grid_border_radius: { type: Number, default: 0 },

    grid_border_color: { type: String, default: "#fff" },

    grid_border_width: { type: Number, default: 0 },

    // grid date and time config  ==========================================

    is_valid_date: { type: Boolean },

    is_valid_from: { type: String },

    is_valid_upto: { type: String },

    // grid position status  ==========================================

    position: { type: Number, required: true },

    status: { type: Boolean, default: true }

});

const allCaroselANdBanner = mongoose.model('all_carosel_and_Banner', allCaroselAndBanner);

module.exports = allCaroselANdBanner;