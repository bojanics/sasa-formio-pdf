var formObj = {"_id":"5a059db29499b40001380af9","machineName":"nezcjzowfnfwzny:GHR-SLE","modified":"2017-11-23T17:31:17.566Z","title":"GOS | WebQuotes - HR S-Leasing","display":"form","name":"GHR-SLE","path":"ghr-sle","project":"5a05516e35677f0001aeef6e","_vid":0,"revisions":"","created":"2017-11-10T12:38:10.349Z","components":[{"properties":{"":""},"conditional":{"eq":"","when":null,"show":""},"tags":[],"hideLabel":false,"type":"columns","columns":[{"pull":0,"push":0,"offset":0,"width":12,"components":[{"properties":{"":""},"conditional":{"eq":"","when":null,"show":""},"tags":[],"hideLabel":false,"type":"content","html":"<div style=\"background: rgb(238, 238, 238); padding: 5px 10px; border: 1px solid rgb(204, 204, 204); border-image: none;\"><span style=\"font-size: 28px;\">Ponuda osiguranja</span></div>\n","input":false,"key":"columns6Content"}]}],"key":"columns6","tableView":false,"input":false,"clearOnHide":false},{"clearOnHide":false,"input":false,"tableView":false,"key":"columns2","columns":[{"components":[{"lockKey":true,"disabled":true,"tooltip":"Svaka ponuda ima jedinstveni broj ponude leasinga.","properties":{"":""},"tags":[],"hideLabel":false,"type":"textfield","conditional":{"eq":"","when":null,"show":""},"validate":{"customPrivate":false,"custom":"","pattern":"","maxLength":"","minLength":"","required":false},"clearOnHide":true,"hidden":false,"persistent":true,"unique":false,"protected":false,"defaultValue":"0300422","multiple":false,"suffix":"","prefix":"","placeholder":"","key":"inp_leasing_subject","label":"Broj ponude leasinga","inputMask":"","inputType":"text","tableView":true,"input":true}],"width":6,"offset":0,"push":0,"pull":0},{"components":[],"width":6,"offset":0,"push":0,"pull":0}],"type":"columns","hideLabel":false,"tags":[],"conditional":{"show":"","when":null,"eq":""},"properties":{"":""}},{"clearOnHide":false,"input":false,"tableView":false,"key":"columns","columns":[{"components":[{"disabled":true,"input":true,"tableView":true,"inputType":"number","label":"Osnovica za izracun premije","key":"Inp_finance_amount","placeholder":"","prefix":"","suffix":"","defaultValue":"12221.80","protected":false,"persistent":true,"hidden":false,"clearOnHide":true,"validate":{"required":false,"min":"","max":"","step":"any","integer":"","multiple":"","custom":""},"type":"number","hideLabel":false,"tags":[],"conditional":{"show":"","when":null,"eq":""},"properties":{"":""},"tooltip":"Osnovica za izracun premije je financirana vrijednost.","lockKey":true}],"width":6,"offset":0,"push":0,"pull":0},{"components":[{"input":true,"tableView":true,"inputType":"text","inputMask":"","label":"Valuta","key":"inp_currency","placeholder":"","prefix":"","suffix":"","multiple":false,"defaultValue":"EUR","protected":false,"unique":false,"persistent":true,"hidden":false,"clearOnHide":true,"validate":{"required":false,"minLength":"","maxLength":"","pattern":"","custom":"","customPrivate":false},"conditional":{"show":"","when":null,"eq":""},"type":"textfield","hideLabel":false,"tags":[],"properties":{"":""},"tooltip":"Valuta moÅ¾e biti EUR ili HRK.","disabled":true,"lockKey":true}],"width":6,"offset":0,"push":0,"pull":0}],"type":"columns","hideLabel":false,"tags":[],"conditional":{"show":"","when":null,"eq":""},"properties":{"":""}},{"properties":{"":""},"conditional":{"eq":"","when":null,"show":""},"tags":[],"hideLabel":false,"type":"columns","columns":[{"pull":0,"push":0,"offset":0,"width":6,"components":[{"input":true,"tableView":true,"label":"Vrsta leasinga","key":"tip_fin","placeholder":"","data":{"values":[{"value":"OL","label":"Operativni leasing"},{"value":"FL","label":"Financijski leasing"}],"json":"","url":"","resource":"","custom":""},"dataSrc":"values","valueProperty":"","defaultValue":"FL","refreshOn":"","filter":"","authenticate":false,"template":"<span>{{ item.label }}</span>","multiple":false,"protected":false,"unique":false,"persistent":true,"hidden":false,"clearOnHide":true,"validate":{"required":false},"type":"select","hideLabel":false,"tags":[],"conditional":{"show":"","when":null,"eq":""},"properties":{"":""},"disabled":true,"tooltip":"Vrsta leasinga moÅ¾e biti OL ili FL. Operativni leasing ili financijski leasing.","lockKey":true}]},{"pull":0,"push":0,"offset":0,"width":6,"components":[{"input":true,"tableView":true,"label":"Novo vozilo","key":"inp_new","placeholder":"","data":{"values":[{"value":"Yes","label":"Da"},{"value":"No","label":"Ne"}],"json":"","url":"","resource":"","custom":""},"dataSrc":"values","valueProperty":"","defaultValue":"Yes","refreshOn":"","filter":"","authenticate":false,"template":"<span>{{ item.label }}</span>","multiple":false,"protected":false,"unique":false,"persistent":true,"hidden":false,"clearOnHide":true,"validate":{"required":false},"type":"select","hideLabel":false,"tags":[],"conditional":{"show":"","when":null,"eq":""},"properties":{"":""},"tooltip":"Vrijednosti za \"Nova vozila\" su DA ili NE.","disabled":true,"lockKey":true}]}],"key":"columns4","tableView":false,"input":false,"clearOnHide":false},{"properties":{"":""},"conditional":{"eq":"","when":null,"show":""},"tags":[],"hideLabel":false,"type":"columns","columns":[{"pull":0,"push":0,"offset":0,"width":12,"components":[{"tooltip":"Premija odreÄ‘ena na osnovu financirane vrijesnosti.","properties":{"":""},"conditional":{"eq":"","when":null,"show":""},"tags":[],"hideLabel":false,"breadcrumb":"default","type":"panel","components":[{"tooltip":"","lockKey":true,"disabled":true,"properties":{"":""},"conditional":{"eq":"","when":null,"show":""},"tags":[],"hideLabel":false,"type":"number","validate":{"custom":"","multiple":"","integer":"","step":"any","max":"","min":"","required":false},"clearOnHide":true,"hidden":false,"persistent":true,"protected":false,"defaultValue":"233.93","suffix":"","prefix":"","placeholder":"","key":"out_uniqa","label":"Uniqa osiguranja","inputType":"number","tableView":true,"input":true},{"tooltip":"","lockKey":true,"disabled":true,"properties":{"":""},"conditional":{"eq":"","when":null,"show":""},"tags":[],"hideLabel":false,"type":"number","validate":{"custom":"","multiple":"","integer":"","step":"any","max":"","min":"","required":false},"clearOnHide":true,"hidden":false,"persistent":true,"protected":false,"defaultValue":"251.40","suffix":"","prefix":"","placeholder":"","key":"out_wiener","label":"Wiener osiguranje VIG","inputType":"number","tableView":true,"input":true}],"tableView":false,"theme":"default","title":"Premija za nova osobna vozila","input":false,"key":"panel","clearOnHide":false}]}],"key":"columns5","tableView":false,"input":false,"clearOnHide":false},{"clearOnHide":false,"input":false,"tableView":false,"key":"columns3","columns":[{"components":[{"tooltip":"KorisniÄke informacije","disabled":true,"properties":{"":""},"tags":[],"hideLabel":false,"type":"textfield","conditional":{"eq":"","when":null,"show":""},"validate":{"customPrivate":false,"custom":"","pattern":"","maxLength":"","minLength":"","required":false},"clearOnHide":true,"hidden":false,"persistent":true,"unique":false,"protected":false,"defaultValue":"saal\\tkerezija","multiple":false,"suffix":"","prefix":"","placeholder":"","key":"uid","label":"KorisniÄki ID","inputMask":"","inputType":"text","tableView":true,"input":true}],"width":6,"offset":0,"push":0,"pull":0},{"components":[],"width":6,"offset":0,"push":0,"pull":0}],"type":"columns","hideLabel":false,"tags":[],"conditional":{"show":"","when":null,"eq":""},"properties":{"":""}},{"hideLabel":false,"type":"button","theme":"primary","disableOnInvalid":false,"action":"submit","block":false,"rightIcon":"","leftIcon":"","size":"md","key":"submit","tableView":false,"label":"Ponuda (PDF)","input":true,"tags":[],"conditional":{"show":"","when":null,"eq":""},"properties":{"":""}}],"owner":"594fd15f7684cc005c2280ae","submissionAccess":[],"access":[{"type":"read_all","roles":["5a05516e35677f0001aeef6f","5a05516e35677f0001aeef70","5a05516e35677f0001aeef71"]}],"tags":[],"type":"form"};