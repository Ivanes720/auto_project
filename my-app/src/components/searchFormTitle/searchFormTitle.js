import React, { useState, useEffect } from "react";
import "./searchFormTitle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import getTransportData from "../../services/apiServices";
const allCategoriesFromApi =
  "https://developers.ria.com/auto/categories/?api_key=udjpgRF2gjAOp6ov2xYgOEcXLwXxpeFuN5JuUbjs";

const SearchFormTitle = (props) => {
  const [selectTypesTransport, setSelectTypesTransport] = useState([
    { name: "", value: "" },
  ]);

  const [selectBrandTransport, setSelectBrandTransport] = useState([
    { name: "", value: "" },
  ]);
  const [selectModelTransport, setSelectModelTransport] = useState([
    { name: "", value: "" },
  ]);

  const [filters, setFilters] = useState(
  {typesValue: '',
  brandValue: '',
  modelValue: ''}

);

 const handleTypesChange  = (e) => setFilters({
  typesValue: e.target.value,
  },
    console.log(filters.typesValue)
  )

  const handleBrandChange  = (e) => setFilters({
typesValue: filters.typesValue,
     brandValue: e.target.value
    },
    console.log(filters.brandValue)
    )

    const handleModelChange  = (e) => setFilters({
     typesValue: filters.typesValue,
      brandValue: filters.brandValue, 
      modelValue: e.target.value
      },
      console.log(filters.modelValue)
      )


  useEffect(() => {
        (async () => {
            let data = await getTransportData(allCategoriesFromApi);
      setSelectTypesTransport(
        data.map(({ name, value }) => ({ name: name, value: value }))
      );
    })();
  }, []);

  useEffect(() => {
    (async () => {
      let data = await getTransportData(
        `https://developers.ria.com/auto/categories/${filters.typesValue}/marks?api_key=udjpgRF2gjAOp6ov2xYgOEcXLwXxpeFuN5JuUbjs`
      );
      setSelectBrandTransport(
        data.map(({ name, value }) => ({ name: name, value: value }))
      );
    
    })();

  }, [filters.typesValue]);
  
  useEffect(() => {
    (async () => {
      let data = await getTransportData(
       `https://developers.ria.com/auto/categories/${filters.typesValue}/marks/${filters.brandValue}/models?api_key=udjpgRF2gjAOp6ov2xYgOEcXLwXxpeFuN5JuUbjs`
      );
  
      setSelectModelTransport(
        data.map(({ name, value }) => ({ name: name, value: value }))
      );
      
    })()
  }, []);



  return (
    <div className="span8 form-search">
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
              <select
              value={filters.typesValue}
                onChange={handleTypesChange}
              >
                <option>любой</option>
                {selectTypesTransport.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.name}
                  </option>
                ))}
              </select>
              <div className="form_mark">
                <div
                  id="brandTooltipBrandAutocomplete-brand"
                  className="autocomplete-search"
                >
                  <select className="unstyle scrollbar autocomplete-select hide"
                  onChange={handleBrandChange}
                  //value={filters.brandValue}
                  >
                    <option className="list-item">марка</option>
                    {selectBrandTransport.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="model_choise">
              <select className="unstyle scrollbar autocomplete-select hide"
                              onChange={handleModelChange}    
                  >
                    <option className="list-item">модель</option>
                    {selectModelTransport.map((item) => (
                      <option key={item.name} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                
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

export default SearchFormTitle;