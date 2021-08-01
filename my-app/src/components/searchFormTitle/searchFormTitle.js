import React from "react";
import "./searchFormTitle.css";

const searchFormTitle = () => {
  const createNode = (element) => document.createElement(element);

  const getAllData = async () => {
    const res = await fetch(
      "https://developers.ria.com/auto/categories/?api_key=udjpgRF2gjAOp6ov2xYgOEcXLwXxpeFuN5JuUbjs"
    );
    if (res.ok) {
      const data = await res.json();
      console.log(data);

      return data.forEach((item) => {
        const selectElem = document.getElementById("categoriesss");
        const options = createNode("options");
        options.value = item.name;
        selectElem.appendChild(options);
      });
    } else {
      console.log("error, res.status");
    }
  };
  getAllData();
  return (
    <div className="form_search">
      <form>
        <div className="filter-checked-car">
          <input type="checkbox" id="verifiedVIN" />
          <label>
            <span className="checked_ad">Перевірений VIN</span>
          </label>
        </div>
        <div className="wrapper">
          <div className="nav">
            <input
              id="allRadioType"
              type="radio"
              value="all"
              checked="checked"
            />
            <label for="allRadioType">
              <span>Все</span>{" "}
            </label>

            <input
              id="buRadioType"
              type="radio"
              value="bu"
            />
            <label for="buRadioType">
              <span>Б/у</span>{" "}
            </label>

            <input
              id="naRadioType"
              type="radio"
              value="na"
            />
            <label for="naRadioType">
              <span>Новые авто</span>
            </label>
            <input
              id="orderRadioType"
              type="radio"
              value="order"
            />
            <label for="orderRadioType">
              <span>Под пригон</span>
            </label>
          </div>
          <div className="item_column primary_column">
            <div className="select_transport">
              <select id="categoriesss" className="e-form">
                <option>Любой</option>
              </select>
              <div className="brand_choise">
                <input
                  type="search"
                  id="brandTooltipBrandAutocompleteInput-brand"
                  placeholder="марка"
                  value=""
                />
                <label
                  for="brandTooltipBrandAutocompleteInput-brand"
                  className="text"
                ></label>
                <span className="ac-clean">×</span>
              </div>
              <div className="model_choise">
                <input
                  type="search"
                  id="brandTooltipBrandAutocompleteInput-model"
                  placeholder="модель"
                  value=""
                />
                <label
                  for="brandTooltipBrandAutocompleteInput-model"
                  data-text="Модель"
                  className="text"
                ></label>
                <span className="ac-clean hide">×</span>
              </div>
            </div>
          </div>

          <div className="item_column secondary_column">
            <div className="m-rows">
              <div className="m-rows">
                <label
                  for="brandTooltipBrandAutocompleteInput-region"
                  class="m-label"
                >
                  Регион
                </label>
              </div>
              <div
                id="brandTooltipBrandAutocomplete-region"
                className="autocomplete-search"
              >
                <input
                  type="search"
                  id="brandTooltipBrandAutocompleteInput-region"
                  placeholder="Регион"
                />
                <label
                  for="brandTooltipBrandAutocompleteInput-region"
                className="text"
                ></label>
                <span className="ac-clean hide">×</span>
                <ul
                  className="unstyle scrollbar autocomplete-select hide"
                ></ul>
              </div>
              <div className="m-rows e-year"></div>
            </div>

            <label id="yearsLabel" for="yearFrom" className="m-label">
              Год
            </label>
            <div className="m-indent">
              <div className="table">
                <div className="t-cell">
                  <select
                    id="yearFrom"
                    placeholder="от"
                    className="e-form _grey"
                  >
                    <option value="0" selected="selected">
                      от
                    </option>
                  </select>
                </div>
                <select
                  id="yearTo"
                  className="e-form _grey"
                >
                  <option value="0" selected="selected">
                    до
                  </option>
                </select>
              </div>
            </div>
            <div className="m-rows e-cost">
              <label id="priceLabel" for="priceTo" class="m-label">
                Цена, $
              </label>
              <div className="m-indent">
                <div className="table">
                  <div className="t-cell">
                    <input
                      type="number"
                      id="priceFrom"
                      placeholder="от"
                      min="0"
                      className="e-form"
                    />
                  </div>
                  <div className="t-cell">
                    <input
                      type="number"
                      id="priceTo"
                      placeholder="до"
                      min="0"
                      className="e-form"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default searchFormTitle;
