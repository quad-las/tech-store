import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../context";

export default function ProductFilter() {
  return (
    <ProductConsumer>
      {value => {
        const {
          search,
          min,
          max,
          price,
          company,
          shipping,
          handleChange,
          storeProducts,
        } = value;

        let brands = new Set();
        brands.add("all");
        for (let brand in storeProducts) {
          brands.add(storeProducts[brand]["company"]);
        }
        brands = [...brands];

        return (
          <div className="row my-5">
            <div className="col-10 mx-auto">
              <FilterWrapper>
                {/* product filter */}
                <div>
                  <label htmlFor="search">search products</label>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    onChange={handleChange}
                    value={search}
                    className="filter-item"
                  />
                </div>

                {/* brand filter */}
                <div>
                  <label htmlFor="company">brand</label>
                  <select
                    name="company"
                    id="company"
                    className="filter-item"
                    value={company}
                    onChange={handleChange}
                  >
                    {brands.map((brand, index) => {
                      return (
                        <option key={index} value={brand}>
                          {brand}
                        </option>
                      );
                    })}
                  </select>
                </div>

                {/* filter price */}
                <div>
                  <label htmlFor="price">
                    <p className="mb-2">
                      product price: <span>${price}</span>
                    </p>
                  </label>
                  <input
                    type="range"
                    name="price"
                    id="price"
                    min={min}
                    max={max}
                    value={price}
                    onChange={handleChange}
                    className="filter-price"
                  />
                </div>

                {/* shipping filter */}
                <div>
                  <label htmlFor="shipping" className="mx-2">
                    free shipping
                  </label>
                  <input
                    type="checkbox"
                    name="shipping"
                    id="shipping"
                    onChange={handleChange}
                    checked={shipping && true}
                  />
                </div>
              </FilterWrapper>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
}

const FilterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
  label {
    font-weight: bold;
    text-transform: capitalize;
  }
  .filter-item,
  .filter-price {
    display: block;
    width: 100%;
    background: transparent;
    border-radius: 0.2rem;
    border: 2px solid var(--darkGrey);
  }
`;
