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
      
      return data.forEach(elem => {
        for (let elem = 0; elem < data.length; elem++) 
        {
          const selectElem = document.getElementById("categories");
          const option = createNode("option");
          option.textContent = data[elem].name;
          selectElem.appendChild(option);
        }
      });;
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
            <input id="allRadioType" type="radio" />
            <label>
              <span>Все</span>{" "}
            </label>

            <input id="buRadioType" type="radio" />
            <label>
              <span>Б/у</span>{" "}
            </label>

            <input id="naRadioType" type="radio" />
            <label>
              <span>Новые авто</span>
            </label>
            <input id="orderRadioType" type="radio" />
            <label>
              <span>Под пригон</span>
            </label>
          </div>
          <div className="item_column primary_column">
            <div className="select_transport">
              <select id="categories" className="e-form">
                <option value="">dssd</option>
              </select>
              <div className="brand_choise">
                <input
                  type="search"
                  id="brandTooltipBrandAutocompleteInput-brand"
                  placeholder="марка"
                />
                <label className="text"></label>
                <span className="ac-clean">×</span>
              </div>
              <div className="model_choise">
                <input
                  type="search"
                  id="brandTooltipBrandAutocompleteInput-model"
                />
                <label data-text="Модель" className="text"></label>
                <span className="ac-clean hide">×</span>
              </div>
            </div>
          </div>

          <div className="item_column secondary_column">
            <div className="m-rows">
              <div className="m-rows">
                <label className="m-label">Регион</label>
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
                <label className="text"></label>
                <span className="ac-clean hide">×</span>
                <ul className="unstyle scrollbar autocomplete-select hide"></ul>
              </div>
              <div className="m-rows e-year"></div>
            </div>

            <label id="yearsLabel" className="m-label">
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
                    <option>от</option>
                  </select>
                </div>
                <select id="yearTo" className="e-form _grey">
                  <option>до</option>
                </select>
              </div>
            </div>
            <div className="m-rows e-cost">
              <label id="priceLabel" className="m-label">
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
