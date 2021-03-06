var formObj={
	"type": "form",
	"tags": [],
	"owner": "599d5130a0434200072250ab",
	"components": [{
		"properties": {
			"": ""
		},
		"conditional": {
			"eq": "",
			"when": null,
			"show": ""
		},
		"tags": [],
		"type": "htmlelement",
		"content": "",
		"className": "",
		"attrs": [{
			"attr": "src",
			"value": "img/greco-erste.png"
		},
		{
			"attr": "width",
			"value": "100%"
		}],
		"tag": "img",
		"input": false,
		"key": "html",
		"hideLabel": false,
		"label": "Content"
	},
	{
		"properties": {
			"": ""
		},
		"conditional": {
			"eq": "",
			"when": null,
			"show": ""
		},
		"tags": [],
		"breadcrumb": "default",
		"type": "panel",
		"components": [{
			"input": true,
			"tableView": true,
			"inputType": "text",
			"inputMask": "",
			"label": "",
			"key": "inp_leasing_subject",
			"placeholder": "",
			"prefix": "",
			"suffix": "",
			"multiple": false,
			"defaultValue": "",
			"protected": false,
			"unique": false,
			"persistent": true,
			"hidden": false,
			"clearOnHide": false,
			"validate": {
				"required": false,
				"minLength": "",
				"maxLength": "",
				"pattern": "",
				"custom": "",
				"customPrivate": false
			},
			"conditional": {
				"show": "",
				"when": null,
				"eq": ""
			},
			"type": "textfield",
			"tags": [],
			"properties": {
				"": ""
			},
			"lockKey": true,
			"hideLabel": false,
			"labelPosition": "top",
			"autofocus": false,
			"spellcheck": true
		}],
		"tableView": false,
		"theme": "default",
		"title": "BROJ PONUDE LEASINGA",
		"input": false,
		"key": "panel",
		"clearOnHide": false,
		"hideLabel": false
	},
	{
		"properties": {
			"": ""
		},
		"conditional": {
			"eq": "",
			"when": null,
			"show": ""
		},
		"tags": [],
		"type": "columns",
		"columns": [{
			"pull": 0,
			"push": 0,
			"offset": 0,
			"width": 6,
			"components": [{
				"properties": {
					"": ""
				},
				"conditional": {
					"eq": "",
					"when": null,
					"show": ""
				},
				"tags": [],
				"breadcrumb": "default",
				"type": "panel",
				"components": [{
					"autofocus": false,
					"input": true,
					"tableView": true,
					"inputType": "text",
					"inputMask": "",
					"label": "Inp_finance_amount",
					"key": "Inp_finance_amount",
					"placeholder": "",
					"prefix": "",
					"suffix": "",
					"multiple": false,
					"defaultValue": "",
					"protected": false,
					"unique": false,
					"persistent": true,
					"hidden": false,
					"clearOnHide": true,
					"spellcheck": true,
					"validate": {
						"required": false,
						"minLength": "",
						"maxLength": "",
						"pattern": "",
						"custom": "",
						"customPrivate": false
					},
					"conditional": {
						"show": "",
						"when": null,
						"eq": ""
					},
					"type": "textfield",
					"labelPosition": "top",
					"tags": [],
					"properties": {
						
					},
					"lockKey": true,
					"hideLabel": true
				}],
				"tableView": false,
				"theme": "default",
				"title": "OSNOVICA ZA IZRAČUN PREMIJE",
				"input": false,
				"key": "panel2",
				"clearOnHide": false,
				"hideLabel": false
			}]
		},
		{
			"pull": 0,
			"push": 0,
			"offset": 0,
			"width": 6,
			"components": [{
				"properties": {
					"": ""
				},
				"conditional": {
					"eq": "",
					"when": null,
					"show": ""
				},
				"tags": [],
				"breadcrumb": "default",
				"type": "panel",
				"components": [{
					"input": true,
					"tableView": true,
					"inputType": "text",
					"inputMask": "",
					"label": "",
					"key": "inp_currency",
					"placeholder": "",
					"prefix": "",
					"suffix": "",
					"multiple": false,
					"defaultValue": "",
					"protected": false,
					"unique": false,
					"persistent": true,
					"hidden": false,
					"clearOnHide": false,
					"validate": {
						"required": false,
						"minLength": "",
						"maxLength": "",
						"pattern": "",
						"custom": "",
						"customPrivate": false
					},
					"conditional": {
						"show": "",
						"when": null,
						"eq": ""
					},
					"type": "textfield",
					"tags": [],
					"properties": {
						"": ""
					},
					"lockKey": true,
					"hideLabel": false,
					"labelPosition": "top",
					"autofocus": false,
					"spellcheck": true
				}],
				"tableView": false,
				"theme": "default",
				"title": "VALUTA",
				"input": false,
				"key": "tablePanel",
				"clearOnHide": false,
				"hideLabel": false
			}]
		}],
		"key": "columns",
		"tableView": false,
		"input": false,
		"clearOnHide": false,
		"hideLabel": false,
		"label": "Columns"
	},
	{
		"properties": {
			"": ""
		},
		"conditional": {
			"eq": "",
			"when": null,
			"show": ""
		},
		"tags": [],
		"breadcrumb": "default",
		"type": "panel",
		"components": [{
			"lockKey": true,
			"properties": {
				"": ""
			},
			"tags": [],
			"type": "textfield",
			"conditional": {
				"eq": "",
				"when": null,
				"show": ""
			},
			"validate": {
				"customPrivate": false,
				"custom": "",
				"pattern": "",
				"maxLength": "",
				"minLength": "",
				"required": false
			},
			"clearOnHide": false,
			"hidden": false,
			"persistent": true,
			"unique": false,
			"protected": false,
			"defaultValue": "",
			"multiple": false,
			"suffix": "",
			"prefix": "",
			"placeholder": "",
			"key": "tip_fin",
			"label": "",
			"inputMask": "",
			"inputType": "text",
			"tableView": true,
			"input": true,
			"hideLabel": false,
			"labelPosition": "top",
			"autofocus": false,
			"spellcheck": true
		}],
		"tableView": false,
		"theme": "default",
		"title": "VRSTA LEASINGA",
		"input": false,
		"key": "panel3",
		"clearOnHide": false,
		"hideLabel": false
	},
	{
		"key": "panel4",
		"input": false,
		"title": "NOVO VOZILO",
		"theme": "default",
		"tableView": false,
		"components": [{
			"lockKey": true,
			"properties": {
				"": ""
			},
			"tags": [],
			"type": "textfield",
			"conditional": {
				"eq": "",
				"when": null,
				"show": ""
			},
			"validate": {
				"customPrivate": false,
				"custom": "",
				"pattern": "",
				"maxLength": "",
				"minLength": "",
				"required": false
			},
			"clearOnHide": false,
			"hidden": false,
			"persistent": true,
			"unique": false,
			"protected": false,
			"defaultValue": "",
			"multiple": false,
			"suffix": "",
			"prefix": "",
			"placeholder": "",
			"key": "inp_new",
			"label": "",
			"inputMask": "",
			"inputType": "text",
			"tableView": true,
			"input": true,
			"hideLabel": false,
			"labelPosition": "top",
			"autofocus": false,
			"spellcheck": true
		}],
		"type": "panel",
		"breadcrumb": "default",
		"tags": [],
		"conditional": {
			"show": "",
			"when": null,
			"eq": ""
		},
		"properties": {
			"": ""
		},
		"clearOnHide": false,
		"hideLabel": false
	},
	{
		"properties": {
			"": ""
		},
		"conditional": {
			"eq": "",
			"when": null,
			"show": ""
		},
		"tags": [],
		"breadcrumb": "default",
		"type": "panel",
		"components": [{
			"properties": {
				"": ""
			},
			"conditional": {
				"eq": "",
				"when": null,
				"show": ""
			},
			"tags": [],
			"type": "columns",
			"columns": [{
				"pull": 0,
				"push": 0,
				"offset": 0,
				"width": 6,
				"components": [{
					"properties": {
						"": ""
					},
					"conditional": {
						"eq": "",
						"when": null,
						"show": ""
					},
					"tags": [],
					"type": "htmlelement",
					"content": "Uniqa osiguranje",
					"className": "",
					"attrs": [{
						"attr": "",
						"value": ""
					}],
					"tag": "span",
					"input": false,
					"key": "panel5ColumnsHtml",
					"hideLabel": false,
					"label": "Content"
				}]
			},
			{
				"pull": 0,
				"push": 0,
				"offset": 0,
				"width": 6,
				"components": [{
					"autofocus": false,
					"input": true,
					"tableView": true,
					"inputType": "text",
					"inputMask": "",
					"label": "premium_uniqa_string",
					"key": "premium_uniqa_string",
					"placeholder": "",
					"prefix": "",
					"suffix": "",
					"multiple": false,
					"defaultValue": "",
					"protected": false,
					"unique": false,
					"persistent": true,
					"hidden": false,
					"clearOnHide": true,
					"spellcheck": true,
					"validate": {
						"required": false,
						"minLength": "",
						"maxLength": "",
						"pattern": "",
						"custom": "",
						"customPrivate": false
					},
					"conditional": {
						"show": "",
						"when": null,
						"eq": ""
					},
					"type": "textfield",
					"labelPosition": "top",
					"tags": [],
					"properties": {
						
					},
					"lockKey": true,
					"hideLabel": true
				}]
			}],
			"key": "panel5Columns",
			"tableView": false,
			"input": false,
			"clearOnHide": false,
			"hideLabel": false,
			"label": "Columns"
		},
		{
			"properties": {
				"": ""
			},
			"conditional": {
				"eq": "",
				"when": null,
				"show": ""
			},
			"tags": [],
			"type": "columns",
			"columns": [{
				"pull": 0,
				"push": 0,
				"offset": 0,
				"width": 6,
				"components": [{
					"key": "panel5Columns2Html",
					"input": false,
					"tag": "span",
					"attrs": [{
						"value": "",
						"attr": ""
					}],
					"className": "",
					"content": "Wiener osiguranje VIG",
					"type": "htmlelement",
					"tags": [],
					"conditional": {
						"show": "",
						"when": null,
						"eq": ""
					},
					"properties": {
						"": ""
					},
					"hideLabel": false,
					"label": "Content"
				}]
			},
			{
				"pull": 0,
				"push": 0,
				"offset": 0,
				"width": 6,
				"components": [{
					"autofocus": false,
					"input": true,
					"tableView": true,
					"inputType": "text",
					"inputMask": "",
					"label": "premium_wstv_string",
					"key": "premium_wstv_string",
					"placeholder": "",
					"prefix": "",
					"suffix": "",
					"multiple": false,
					"defaultValue": "",
					"protected": false,
					"unique": false,
					"persistent": true,
					"hidden": false,
					"clearOnHide": true,
					"spellcheck": true,
					"validate": {
						"required": false,
						"minLength": "",
						"maxLength": "",
						"pattern": "",
						"custom": "",
						"customPrivate": false
					},
					"conditional": {
						"show": "",
						"when": null,
						"eq": ""
					},
					"type": "textfield",
					"labelPosition": "top",
					"tags": [],
					"properties": {
						
					},
					"lockKey": true,
					"hideLabel": true
				}]
			}],
			"key": "panel5Columns2",
			"tableView": false,
			"input": false,
			"clearOnHide": false,
			"hideLabel": false,
			"label": "Columns"
		}],
		"tableView": false,
		"theme": "default",
		"title": "PREMIJA ZA NOVA OSOBNA VOZILA",
		"input": false,
		"key": "panel5",
		"clearOnHide": false,
		"hideLabel": false
	},
	{
		"lockKey": true,
		"properties": {
			"": ""
		},
		"tags": [],
		"type": "textfield",
		"conditional": {
			"eq": "",
			"when": null,
			"show": ""
		},
		"validate": {
			"customPrivate": false,
			"custom": "",
			"pattern": "",
			"maxLength": "",
			"minLength": "",
			"required": false
		},
		"clearOnHide": false,
		"hidden": false,
		"persistent": true,
		"unique": false,
		"protected": false,
		"defaultValue": "",
		"multiple": false,
		"suffix": "",
		"prefix": "",
		"placeholder": "",
		"key": "uid",
		"label": "UID",
		"inputMask": "",
		"inputType": "text",
		"tableView": true,
		"input": true,
		"hideLabel": false,
		"labelPosition": "top",
		"autofocus": false,
		"spellcheck": true
	},
	{
		"input": true,
		"label": "Ponuda.pdf",
		"tableView": false,
		"key": "ponudapdf",
		"size": "md",
		"leftIcon": "",
		"rightIcon": "",
		"block": false,
		"action": "custom",
		"disableOnInvalid": false,
		"theme": "primary",
		"type": "button",
		"hideLabel": false,
		"tags": [],
		"conditional": {
			"show": "",
			"when": null,
			"eq": ""
		},
		"properties": {
			
		},
		"custom": "var fn = 'sleasingv12';\n   console.log('Getting PDF for default xsl '+fn+'...');\n   var xsld = [location.protocol, '//', location.host, location.pathname].join('') + \"xsl/\" + fn + '.xsl';   \n   var prexsld = [location.protocol, '//', location.host, location.pathname].join('') + \"xsl/defaultPre.xsl\";   \n   \nvar newTabWindow = window.open('waiting_for_pdf.html');\n\nvar sd = form.submission.data;\nvar req = new XMLHttpRequest();\nreq.open(\"POST\", \"https://sasa-test-pdf-proxy.azurewebsites.net/pdf\",true);\nreq.responseType = \"text\";\nreq.setRequestHeader(\"Content-type\", \"application/json\");\nreq.send('{\"data\" : '+JSON.stringify(sd)+',\"xsl\" : \"'+xsld+'\",\"xslPre\" : \"'+prexsld+'\"}');\n\nreq.onload = function (event) {\n   var d = new Date();\n   var fname = fn+'_'+d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+'-'+d.getHours()+'-'+d.getMinutes()+'-'+d.getSeconds()+'-'+d.getMilliseconds()+'.pdf';\n   console.log('pdfloc='+req.response);\n   newTabWindow.location.replace(req.response);\n};",
		"autofocus": false
	},
	{
		"customConditional": "",
		"input": false,
		"tableView": false,
		"key": "columns2",
		"columns": [{
			"components": [{
				"input": true,
				"label": "Ponuda.pdf (FOP)",
				"tableView": false,
				"key": "pdffop",
				"size": "md",
				"leftIcon": "",
				"rightIcon": "",
				"block": false,
				"action": "event",
				"disableOnInvalid": false,
				"theme": "primary",
				"type": "button",
				"tags": [],
				"conditional": {
					"show": "",
					"when": null,
					"eq": ""
				},
				"properties": {
					"": ""
				},
				"event": "getSLeasingPDF",
				"lockKey": true,
				"customConditional": "show",
				"hideLabel": false,
				"autofocus": false
			}],
			"width": 6,
			"offset": 0,
			"push": 0,
			"pull": 0
		},
		{
			"components": [{
				"input": true,
				"label": "Get plain data PDF (FOP)",
				"tableView": false,
				"key": "pdfplainfop",
				"size": "md",
				"leftIcon": "",
				"rightIcon": "",
				"block": false,
				"action": "event",
				"disableOnInvalid": false,
				"theme": "primary",
				"type": "button",
				"tags": [],
				"conditional": {
					"show": "",
					"when": null,
					"eq": ""
				},
				"properties": {
					"": ""
				},
				"event": "getPlainDataPDF",
				"lockKey": true,
				"hideLabel": false,
				"autofocus": false
			}],
			"width": 6,
			"offset": 0,
			"push": 0,
			"pull": 0
		}],
		"type": "columns",
		"tags": [],
		"conditional": {
			"show": "",
			"when": null,
			"eq": ""
		},
		"properties": {
			"": ""
		},
		"clearOnHide": false,
		"hideLabel": false,
		"label": "Columns"
	},
	{
		"input": false,
		"tableView": false,
		"key": "columns3",
		"columns": [{
			"components": [{
				"input": true,
				"label": "Ponuda.pdf (Altosoft)",
				"tableView": false,
				"key": "pdfaltosoft",
				"size": "md",
				"leftIcon": "",
				"rightIcon": "",
				"block": false,
				"action": "event",
				"disableOnInvalid": false,
				"theme": "primary",
				"type": "button",
				"tags": [],
				"conditional": {
					"show": "",
					"when": null,
					"eq": ""
				},
				"properties": {
					"": ""
				},
				"lockKey": true,
				"event": "getSLeasingPDF",
				"hideLabel": false,
				"autofocus": false
			}],
			"width": 6,
			"offset": 0,
			"push": 0,
			"pull": 0
		},
		{
			"components": [{
				"input": true,
				"label": "Get plain data PDF (Altosoft)",
				"tableView": false,
				"key": "pdfplainaltosoft",
				"size": "md",
				"leftIcon": "",
				"rightIcon": "",
				"block": false,
				"action": "event",
				"disableOnInvalid": false,
				"theme": "primary",
				"type": "button",
				"tags": [],
				"conditional": {
					"show": "",
					"when": null,
					"eq": ""
				},
				"properties": {
					"": ""
				},
				"lockKey": true,
				"event": "getPlainDataPDF",
				"hideLabel": false,
				"autofocus": false
			}],
			"width": 6,
			"offset": 0,
			"push": 0,
			"pull": 0
		}],
		"type": "columns",
		"tags": [],
		"conditional": {
			"show": "",
			"when": null,
			"eq": ""
		},
		"properties": {
			"": ""
		},
		"clearOnHide": false,
		"hideLabel": false,
		"label": "Columns"
	},
	{
		"input": false,
		"tableView": false,
		"key": "columns4",
		"columns": [{
			"components": [{
				"lockKey": true,
				"input": true,
				"label": "Ponuda.pdf (AHFormatter)",
				"tableView": false,
				"key": "pdfahformatter",
				"size": "md",
				"leftIcon": "",
				"rightIcon": "",
				"block": false,
				"action": "event",
				"disableOnInvalid": false,
				"theme": "primary",
				"type": "button",
				"tags": [],
				"conditional": {
					"show": "",
					"when": null,
					"eq": ""
				},
				"properties": {
					"": ""
				},
				"event": "getSLeasingPDF",
				"hideLabel": false,
				"autofocus": false
			}],
			"width": 6,
			"offset": 0,
			"push": 0,
			"pull": 0
		},
		{
			"components": [{
				"lockKey": true,
				"input": true,
				"label": "Get plain data PDF (AHFormatter)",
				"tableView": false,
				"key": "pdfplainahformatter",
				"size": "md",
				"leftIcon": "",
				"rightIcon": "",
				"block": false,
				"action": "event",
				"disableOnInvalid": false,
				"theme": "primary",
				"type": "button",
				"tags": [],
				"conditional": {
					"show": "",
					"when": null,
					"eq": ""
				},
				"properties": {
					"": ""
				},
				"event": "getPlainDataPDF",
				"hideLabel": false,
				"autofocus": false
			}],
			"width": 6,
			"offset": 0,
			"push": 0,
			"pull": 0
		}],
		"type": "columns",
		"tags": [],
		"conditional": {
			"show": "",
			"when": null,
			"eq": ""
		},
		"properties": {
			"": ""
		},
		"clearOnHide": false,
		"hideLabel": false,
		"label": "Columns"
	},
	{
		"properties": {
			"": ""
		},
		"conditional": {
			"eq": "",
			"when": null,
			"show": ""
		},
		"tags": [],
		"type": "columns",
		"columns": [{
			"pull": 0,
			"push": 0,
			"offset": 0,
			"width": 6,
			"components": [{
				"event": "getSLeasingPDF",
				"lockKey": true,
				"properties": {
					"": ""
				},
				"conditional": {
					"eq": "",
					"when": null,
					"show": ""
				},
				"tags": [],
				"type": "button",
				"theme": "primary",
				"disableOnInvalid": false,
				"action": "event",
				"block": false,
				"rightIcon": "",
				"leftIcon": "",
				"size": "md",
				"key": "pdfahformattersigned",
				"tableView": false,
				"label": "Ponuda.pdf (AHFormatter-signed)",
				"input": true,
				"hideLabel": false,
				"autofocus": false
			}]
		},
		{
			"pull": 0,
			"push": 0,
			"offset": 0,
			"width": 6,
			"components": [{
				"lockKey": true,
				"event": "getPlainDataPDF",
				"properties": {
					"": ""
				},
				"conditional": {
					"eq": "",
					"when": null,
					"show": ""
				},
				"tags": [],
				"type": "button",
				"theme": "primary",
				"disableOnInvalid": false,
				"action": "event",
				"block": false,
				"rightIcon": "",
				"leftIcon": "",
				"size": "md",
				"key": "pdfplainahformattersigned",
				"tableView": false,
				"label": "Get plain data PDF (AHFormatter-signed)",
				"input": true,
				"hideLabel": false,
				"autofocus": false
			}]
		}],
		"key": "columns5",
		"tableView": false,
		"input": false,
		"clearOnHide": false,
		"hideLabel": false,
		"label": "Columns"
	},
	{
		"input": false,
		"tableView": false,
		"key": "columns6",
		"columns": [{
			"components": [{
				"input": true,
				"label": "Ponuda.pdf (AHFormatter-pwd protected:enhydra)",
				"tableView": false,
				"key": "pdfahformatterpasswordprotected",
				"size": "md",
				"leftIcon": "",
				"rightIcon": "",
				"block": false,
				"action": "event",
				"disableOnInvalid": false,
				"theme": "primary",
				"type": "button",
				"tags": [],
				"conditional": {
					"show": "",
					"when": null,
					"eq": ""
				},
				"properties": {
					"": ""
				},
				"event": "getSLeasingPDF",
				"lockKey": true,
				"hideLabel": false,
				"autofocus": false
			}],
			"width": 6,
			"offset": 0,
			"push": 0,
			"pull": 0
		},
		{
			"components": [{
				"input": true,
				"label": "Get plain data PDF (AHFormatter-pwd protected:enhydra)",
				"tableView": false,
				"key": "pdfplainahformatterpasswordprotected",
				"size": "md",
				"leftIcon": "",
				"rightIcon": "",
				"block": false,
				"action": "event",
				"disableOnInvalid": false,
				"theme": "primary",
				"type": "button",
				"tags": [],
				"conditional": {
					"show": "",
					"when": null,
					"eq": ""
				},
				"properties": {
					"": ""
				},
				"event": "getPlainDataPDF",
				"lockKey": true,
				"hideLabel": false,
				"autofocus": false
			}],
			"width": 6,
			"offset": 0,
			"push": 0,
			"pull": 0
		}],
		"type": "columns",
		"tags": [],
		"conditional": {
			"show": "",
			"when": null,
			"eq": ""
		},
		"properties": {
			"": ""
		},
		"clearOnHide": false,
		"hideLabel": false,
		"label": "Columns"
	},
	{
		"input": false,
		"tableView": false,
		"key": "columns7",
		"columns": [{
			"components": [{
				"lockKey": true,
				"event": "getSLeasingPDF",
				"properties": {
					"": ""
				},
				"conditional": {
					"eq": "",
					"when": null,
					"show": ""
				},
				"tags": [],
				"type": "button",
				"theme": "primary",
				"disableOnInvalid": false,
				"action": "event",
				"block": false,
				"rightIcon": "",
				"leftIcon": "",
				"size": "md",
				"key": "pdfahformattersignedandpasswordprotected",
				"tableView": false,
				"label": "Ponuda.pdf (AHFormatter-signed and pwd protected:enhydra)",
				"input": true,
				"hideLabel": false,
				"autofocus": false
			}],
			"width": 6,
			"offset": 0,
			"push": 0,
			"pull": 0
		},
		{
			"components": [{
				"lockKey": true,
				"event": "getPlainDataPDF",
				"properties": {
					"": ""
				},
				"conditional": {
					"eq": "",
					"when": null,
					"show": ""
				},
				"tags": [],
				"type": "button",
				"theme": "primary",
				"disableOnInvalid": false,
				"action": "event",
				"block": false,
				"rightIcon": "",
				"leftIcon": "",
				"size": "md",
				"key": "pdfplainahformattersignedandpasswordprotected",
				"tableView": false,
				"label": "Get plain data PDF (AHFormatter-signed and pwd protected:enhydra)",
				"input": true,
				"hideLabel": false,
				"autofocus": false
			}],
			"width": 6,
			"offset": 0,
			"push": 0,
			"pull": 0
		}],
		"type": "columns",
		"tags": [],
		"conditional": {
			"show": "",
			"when": null,
			"eq": ""
		},
		"properties": {
			"": ""
		},
		"clearOnHide": false,
		"hideLabel": false,
		"label": "Columns"
	}],
	"revisions": "",
	"_vid": 0,
	"access": [{
		"roles": [],
		"type": "create_all"
	},
	{
		"roles": ["59db621cd829450008be0cd9",
		"59db621cd829450008be0cda",
		"59db621cd829450008be0cdb"],
		"type": "read_all"
	},
	{
		"roles": [],
		"type": "update_all"
	},
	{
		"roles": [],
		"type": "delete_all"
	},
	{
		"roles": [],
		"type": "create_own"
	},
	{
		"roles": [],
		"type": "read_own"
	},
	{
		"roles": [],
		"type": "update_own"
	},
	{
		"roles": [],
		"type": "delete_own"
	},
	{
		"roles": [],
		"type": "team_read"
	},
	{
		"roles": [],
		"type": "team_write"
	},
	{
		"roles": [],
		"type": "team_admin"
	}],
	"submissionAccess": [{
		"roles": [],
		"type": "create_all"
	},
	{
		"roles": [],
		"type": "read_all"
	},
	{
		"roles": [],
		"type": "update_all"
	},
	{
		"roles": [],
		"type": "delete_all"
	},
	{
		"roles": [],
		"type": "create_own"
	},
	{
		"roles": [],
		"type": "read_own"
	},
	{
		"roles": [],
		"type": "update_own"
	},
	{
		"roles": [],
		"type": "delete_own"
	},
	{
		"roles": [],
		"type": "team_read"
	},
	{
		"roles": [],
		"type": "team_write"
	},
	{
		"roles": [],
		"type": "team_admin"
	}],
	"created": "2017-10-09T12:11:08.105Z",
	"_id": "59db675cbea0780009a5709b",
	"machineName": "gdxahybippkysmd:hrleasingf1",
	"modified": "2018-03-22T08:56:11.748Z",
	"title": "HR-S-Leasing",
	"display": "form",
	"name": "hrSLeasing",
	"path": "hrleasing",
	"project": "59db621cd829450008be0cd8"
};