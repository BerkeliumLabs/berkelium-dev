use wasm_bindgen::prelude::*;
mod bkmath;

#[wasm_bindgen]
extern "C" {
    
}

#[wasm_bindgen]
pub fn add_numbers(x: i8, y: i8) -> i8 {
    return bkmath::adding(x, y);
}