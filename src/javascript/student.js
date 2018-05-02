import axios from 'axios';

Vue.component('theTest', {
    template: `
   <span class="module">
                    <legend class="col-form-legend col-sm-10"></legend>
                    <div class="input-group input-group">
                        <label class="wQuestionLabel" class="form-control-label" style="width: 578px;" for="wQuestion">Question:</label>

                    </div>
                    <div class="form-group row">
                        <div class="input-group input-group">
                         <!-- The Question Inputfield that needs ID-->
                        
                            <input type="text" class="form-control" aria-label="" id="${theTitle + "Q" + name}" style="width: 578px;">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="input-group input-group">
                            <label id="questionOptions" class="form-control-label" style="width: 578px;"
                                   for="wQuestion">Enter
                                avaible options:</label>
                        </div>
                    </div>
                     <!-- The radiobuttons and option inputfields that needs ID's-->

                    <div class="form-group row">
                        <div class="input-group input-group">
                  <span class="input-group-addon">
                    <input type="radio" value="1"  name="${theTitle + "rb" + name}" id="${theTitle + "Q" + name + "O" + "1"}" aria-label="">
                  </span>
                            <input type="text" id="${theTitle + "Q" + name + "input" + "1"}" class="form-control" aria-label="" style="width: 578px;">
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="input-group input-group">
                  <span class="input-group-addon">
                    <input type="radio" value="2" name="${theTitle + "rb" + name}" id="${theTitle + "Q" + name + "O" + "2"}" aria-label="">
                  </span>
                            <input type="text" id="${theTitle + "Q" + name + "input" + "2"}" class="form-control" aria-label="" style="width: 578px;">
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="input-group input-group">
                  <span class="input-group-addon">
                    <input type="radio" value="3" name="${theTitle + "rb" + name}" id="${theTitle + "Q" + name + "O" + "3"}" aria-label="">
                  </span>
                            <input type="text" id="${theTitle + "Q" + name + "input" + "3"}" class="form-control" aria-label="" style="width: 578px;">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="input-group input-group">
                  <span class="input-group-addon">
                    <input type="radio" value="4" name="${theTitle + "rb" + name}" id="${theTitle + "Q" + name + "O" + "4"}" aria-label="">
                  </span>
                            <input type="text" id="${theTitle + "Q" + name + "input" + "4"}" class="form-control" aria-label="" style="width: 578px;">
                        </div>
                    </div>
                </span>      
 
   `,

});

// Can be used to collect data when the database is done.
// },
//  export default {
//     data() {
//         return {
//             Test:{},
//         }
//     },
//     mounted() {
//         axios.get('http://localhost:3000/')
//             .then((response) => {
//                 this.Test = response.data;
//             })
//
//             .catch((error) => {
//                 console.log(error);
//             })
//     }
// });
