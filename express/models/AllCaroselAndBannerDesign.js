const mongoose = require('mongoose');

const allCaroselAndBannerDesign = new mongoose.Schema({

    // home page -> 12345
    page_id: { type: String, default: '12345' },

    page_name: {
        type: String,
        required: true
    },

    grid_name: {
        type: String
    },

    grid_background: {
        type: String
    },

    grid_background_color: {
        type: String, default: "#ffffff"
    },

    grid_background_image: {
        type: String
    },

    grid_width: {
        type: Number,
        default: 100
    },

    grid_height: { type: Number, default: 150 },

    showTitleBar: { type: Boolean, default: false },

    // one will be from admin

    design_type: {
        type: String,
        required: true
    },

    design_value: {
        type: String
    },

    container_title_design: {
        container_title_text: { type: String, default: '' },
        container_title_fontSize: { type: Number, default: 0 },
        container_title_color: { type: String, default: '' },
    },

    container_subtitle_design: {
        container_subtitle_text: { type: String, default: '' },
        container_subtitle_fontSize: { type: Number, default: 0 },
        container_subtitle_color: { type: String, default: '' },
    },

    image_border_radius: {
        image_border_top_left: { type: Number, default: 0 },
        image_border_top_right: { type: Number, default: 0 },
        image_border_bottom_left: { type: Number, default: 0 },
        image_border_bottom_right: { type: Number, default: 0 }
    },

    text_area_border_radius: {
        text_area_border_top_left: { type: Number, default: 0 },
        text_area_border_top_right: { type: Number, default: 0 },
        text_area_border_bottom_left: { type: Number, default: 0 },
        text_area_border_bottom_right: { type: Number, default: 0 }
    },

    item_gap: { type: Number, default: 5 },

    direction: { type: String, default: '' },

    // data e.g. img, text applied to , text color 

    data: [
        {
            img: { type: String, default: '' },
            texts: [
                {
                    text_value: { type: String, default: '' },
                    text_color: { type: String, default: '' },
                    text_font_size: { type: Number, default: 0 },
                    text_font_family: { type: String, default: 'sans-serif' }
                }
            ],
            applied_to: { type: String, default: '' },
            applied_to_id: { type: String, default: '' },
            check_page_type: { type: String, default: '' }
        }
    ],

    text_padding: {
        text_padding_top: { type: Number, default: 0 },
        text_padding_right: { type: Number, default: 0 },
        text_padding_bottom: { type: Number, default: 0 },
        text_padding_left: { type: Number, default: 0 }
    },

    text_align: { type: String },

    // country setting =================================

    country: [
        {
            country_name: { type: String },
            country_id: { type: String },
            country_code: { type: String },
        }
    ],

    // carosel config  ==========================================

    auto_play: { type: Boolean, default: false },

    carosel_animation_time: { type: Number, default: 1000 },

    carosel_duration: { type: Number, default: 1000 },

    carosel_arrows: { type: Boolean, default: false },

    // grid config  ==========================================

    cross_axis_count: { type: Number, default: 1 },

    cross_axis_cell_count: { type: Number, default: 1 },

    total_number_of_grid: { type: Number, default: 1 },

    margin: {
        margin_top: { type: Number, default: 0 },
        margin_right: { type: Number, default: 0 },
        margin_bottom: { type: Number, default: 0 },
        margin_left: { type: Number, default: 0 }
    },

    padding: {
        padding_top: { type: Number, default: 0 },
        padding_right: { type: Number, default: 0 },
        padding_bottom: { type: Number, default: 0 },
        padding_left: { type: Number, default: 0 }
    },

    is_grid_have_text_area: { type: Boolean, default: false },

    grid_text_area_location: { type: String, default: "Bottom" },

    grid_text_area_bg_color: { type: String, default: "#ffffff" },

    grid_text_area_opacity: { type: Number, default: 1 },

    is_grid_border: { type: Boolean, default: false },

    grid_border_radius: { type: Number, default: 0 },

    grid_border_color: { type: String, default: "#ffffff" },

    grid_border_width: { type: Number, default: 0 },

    // grid button configs  ============================================

    showOptionButton: { type: Boolean, default: false },

    option_button: {
        title: { type: String, default: 'View All' },
        titleColor: { type: String, default: '#ffffff' },
        fontSize: { type: Number, default: 12 },
        backgroundColor: { type: String, default: "#e91e63" },
        applied_to: { type: String, default: '' },
        applied_to_id: { type: String, default: '' },
        check_page_type: { type: String, default: '' }
    },

    // grid date and time config  ==========================================

    is_valid_date: { type: Boolean },

    is_valid_from: { type: String },

    is_valid_upto: { type: String },

    // grid position status  ==========================================

    position: { type: Number, required: true },

    status: { type: Boolean, default: true }

}, { timestamps: true });

const allCaroselANdBannerDesign = mongoose.model('all_carosel_and_Banner_design', allCaroselAndBannerDesign);

module.exports = allCaroselANdBannerDesign;