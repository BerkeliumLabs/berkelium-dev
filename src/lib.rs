use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    
}

#[wasm_bindgen]
pub fn add_numbers(x: i8, y: i8) -> i8 {
    return adding(x, y);
}

fn adding(a: i8, b:i8) -> i8 {
    return a + b;
}