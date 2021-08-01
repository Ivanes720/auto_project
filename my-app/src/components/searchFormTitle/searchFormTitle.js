import React from 'react';
import './searchFormTitle.css'; 
//import GetAllData from '../services/getAllData';



const searchFormTitle= ()=>{
        const createNode=(element) => document.createElement(element);
                      
        //const append=(parent, el) => parent.appendChild(el);
        const getAllData= async ()=>{

                const res = await  fetch('https://developers.ria.com/auto/categories/?api_key=udjpgRF2gjAOp6ov2xYgOEcXLwXxpeFuN5JuUbjs');
                  if(res.ok) {
                      const data=await res.json();
                      console.log(data)
                  
                    return   data.forEach(item => {
                            
                        const selectElem=document.getElementById('categoriesss')
                        const options=createNode('options');
                        options.value=item.name;
                        selectElem.appendChild(options)
                        //append(selectElem, options);
                    }); 
                            
                   
                } else {
                    console.log("error, res.status")
                }
                        };    
                        getAllData();
return (
        
    <div className="form_search">
<form>
<div className="filter-checked-car">
        <input type="checkbox"  id="verifiedVIN" />
                <label >
                <span className="checked_ad">
            Перевірений VIN
        </span></label></div>
        <div className="wrapper">
        <div className="nav">
                <input id="allRadioType" type="radio" name="type" aria-labelledby="allRadioType" value="all" checked="checked"/>
                <label for="allRadioType"><span>Все</span> </label>
               
                <input id="buRadioType" type="radio" name="type" aria-labelledby="buRadioType" value="bu"/>
                <label for="buRadioType"><span>Б/у</span> </label>
               
                <input id="naRadioType" type="radio" name="type" aria-labelledby="naRadioType" value="na"/>
                <label for="naRadioType"> 
                <span>Новые авто</span></label>
                <input id="orderRadioType" type="radio" name="type" aria-labelledby="orderRadioType" value="order"/>
                <label for="orderRadioType"><span>Под пригон</span></label>
        </div>
<div className="item_column primary_column">
<div className="select_transport">
<select id="categoriesss"  className="e-form">
        <option>Любой</option>
        </select>
       <div className="brand_choise">
               <input type="search" id="brandTooltipBrandAutocompleteInput-brand" placeholder="марка"  value=""/>
               <label for="brandTooltipBrandAutocompleteInput-brand"  className="text"></label>
               <span className="ac-clean">×</span>
       </div>
       <div className="model_choise">
       <input type="search" id="brandTooltipBrandAutocompleteInput-model" placeholder="модель" value=""/>
       <label for="brandTooltipBrandAutocompleteInput-model" data-text="Модель" class="text"></label>
       <span className="ac-clean hide">×</span>
       </div>
       </div>
</div>

<div className="item_column secondary_column">




<div className="m-rows">
        <div className="m-rows">
        <label for="brandTooltipBrandAutocompleteInput-region" class="m-label" data-v-11ebae75="">Регион</label>
        </div>
<div id="brandTooltipBrandAutocomplete-region" className="autocomplete-search" data-v-11ebae75="">
        <input type="search"  required="required" id="brandTooltipBrandAutocompleteInput-region" placeholder="Регион" aria-label="Поиск" data-v-11ebae75=""/>
        <label for="brandTooltipBrandAutocompleteInput-region" data-text="Регион" className="text"></label>
        <span className="ac-clean hide" >×</span>
        <ul className="unstyle scrollbar autocomplete-select hide" data-v-11ebae75=""></ul>
         </div>
<div className="m-rows e-year">

</div>
</div>


<label id="yearsLabel" for="yearFrom" className="m-label">Год</label>
<div className="m-indent">
        <div className="table">
                <div className="t-cell">
                        <select id="yearFrom" name="s_yers[0]" placeholder="от" aria-labelledby="yearsLabel" aria-label="Год от" className="e-form _grey">
                        <option value="0" selected="selected">от</option>
                                 </select>
        </div>
        <select id="yearTo" name="po_yers[0]" data-placeholder="до" aria-labelledby="yearsLabel" aria-label="Год до" className="e-form _grey">
                <option value="0" selected="selected">до</option></select>
        </div>
        </div>
        <div className="m-rows e-cost">
                <label id="priceLabel" for="priceTo" class="m-label">Цена, $</label>
                <div className="m-indent"><div className="table">
                        <div className="t-cell">
                        <input type="number" name="price_ot" id="priceFrom" placeholder="от" aria-labelledby="priceLabel" aria-label="Цена от" min="0" className="e-form"/>
                                </div>
                                <div className="t-cell">
                                <input type="number" name="price_do" id="priceTo" placeholder="до" aria-labelledby="priceLabel" aria-label="Цена до" min="0" className="e-form"/>
                                        </div></div></div></div>

                                        </div>
</div>


</form>

    </div>
   
   );
   
        

};

export default searchFormTitle;
