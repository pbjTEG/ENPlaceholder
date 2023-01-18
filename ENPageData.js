window.EngagingNetworks = {
	"dependencies"   : [
		{
			"conditions": [
				{"condition": "AND", "target": "field:7890123", "comparator": "==", "value": "Y"}],
			"actions"   : [
				{"type": "altlist", "target": "8901234", "altlist": "alt0"}]
		},
		{
			"conditions": [
				{"condition": "AND", "target": "field:7890123", "comparator": "==", "value": "N"}],
			"actions"   : [
				{"type": "altlist", "target": "8901234", "altlist": "alt1"}]
		},
		{
			"conditions": [
				{"condition": "AND", "target": "field:1428525", "comparator": "==", "value": "Y"}],
			"actions"   : []
		},
		{
			"conditions": [
				{"condition": "AND", "target": "field:7890123", "comparator": "==", "value": "N"}],
			"actions"   : [
				{"type": "showHide", "display": "Show", "target": "field:34029"}]
		},
		{
			"conditions": [
				{"condition": "AND", "target": "field:524658", "comparator": "==", "value": "CC"},
				{"condition": "OR", "target": "field:524658", "comparator": "==", "value": "applepay"}],
			"actions"   : [
				{"type": "showHide", "display": "Hide", "target": "field:94208"},
				{"type": "showHide", "display": "Hide", "target": "field:1428533"},
				{"type": "showHide", "display": "Hide", "target": "field:1428537"},
				{"type": "showHide", "display": "Hide", "target": "field:1428536"},
				{"type": "showHide", "display": "Hide", "target": "field:1428534"},
				{"type": "showHide", "display": "Hide", "target": "field:1428535"}]
		},
		{
			"conditions": [
				{"condition": "AND", "target": "field:524658", "comparator": "==", "value": "ACH"},
				{"condition": "OR", "target": "field:524658", "comparator": "==", "value": "applepay"}],
			"actions"   : [
				{"type": "showHide", "display": "Hide", "target": "field:1421990"},
				{"type": "showHide", "display": "Hide", "target": "field:1421992"},
				{"type": "showHide", "display": "Hide", "target": "field:1421991"},
				{"type": "showHide", "display": "Hide", "target": "field:1421994"}]
		}],
	"altLists"       : [
		{
			"id"  : 7890123,
			"data": [
				{
					"name": "alt0",
					"data": [
						{"selected": true, "value": "Y", "label": "MONTHLY", "forId": "", "imageUrl": ""},
						{"selected": false, "value": "N", "label": "ONE-TIME", "forId": "", "imageUrl": ""}]
				}]
		},
		{
			"id"  : 8901234,
			"data": [
				{
					"name": "alt0",
					"data": [
						{"selected": true, "value": "10", "label": "$10", "forId": "", "imageUrl": ""},
						{"selected": false, "value": "20", "label": "$20", "forId": "", "imageUrl": ""},
						{"selected": false, "value": "30", "label": "$30", "forId": "", "imageUrl": ""},
						{"selected": false, "value": "Other", "label": "Other", "forId": "", "imageUrl": ""}]
				},
				{
					"name": "alt1",
					"data": [
						{"selected": false, "value": "40", "label": "$40", "forId": "", "imageUrl": ""},
						{"selected": false, "value": "75", "label": "$75", "forId": "", "imageUrl": ""},
						{"selected": false, "value": "150", "label": "$150", "forId": "", "imageUrl": ""},
						{"selected": false, "value": "Other", "label": "Other", "forId": "", "imageUrl": ""}]
				}]
		}],
	"validators"     : [
		{"componentId": 1428526, "type": "REQ", "format": "", "errorMessage": "Shipping First Name is a mandatory field."},
		{"componentId": 1428527, "type": "REQ", "format": "", "errorMessage": "Shipping Last Name is a mandatory field."},
		{"componentId": 1421897, "type": "REQ", "format": "", "errorMessage": "CITY is a mandatory field."},
		{"componentId": 1421898, "type": "REQ", "format": "", "errorMessage": "EMAIL is a mandatory field."},
		{"componentId": 1421900, "type": "REQ", "format": "", "errorMessage": "STATE is a mandatory field."},
		{"componentId": 1421901, "type": "REQ", "format": "", "errorMessage": "COUNTRY is a mandatory field."},
		{"componentId": 1421902, "type": "REQ", "format": "", "errorMessage": "STREET ADDRESS * is a mandatory field."},
		{"componentId": 1421905, "type": "REQ", "format": "", "errorMessage": "ZIP CODE is a mandatory field."},
		{"componentId": 1428533, "type": "REQ", "format": "", "errorMessage": "Bank Routing Number is a mandatory field."},
		{"componentId": 1428537, "type": "REQ", "format": "", "errorMessage": "Bank Account Number is a mandatory field."},
		{"componentId": 1428530, "type": "REQ", "format": "", "errorMessage": "Last Name is a mandatory field."},
		{"componentId": 1428531, "type": "REQ", "format": "", "errorMessage": "First Name is a mandatory field."},
		{"componentId": 1421882, "type": "REQ", "format": "", "errorMessage": "Recurring Frequency is a mandatory field."},
		{"componentId": 7890123, "type": "REQ", "format": "", "errorMessage": "DONATION TYPE * is a mandatory field."},
		{"componentId": 1421884, "type": "REQ", "format": "", "errorMessage": "Recurring Day is a mandatory field."},
		{"componentId": 8901234, "type": "REQ", "format": "", "errorMessage": "Donation Amount is a mandatory field."},
		{"componentId": 1421888, "type": "REQ", "format": "", "errorMessage": "SHIPPING COUNTRY is a mandatory field."},
		{"componentId": 1421890, "type": "REQ", "format": "", "errorMessage": "SHIPPING ZIP CODE is a mandatory field."},
		{"componentId": 1421892, "type": "REQ", "format": "", "errorMessage": "SHIPPING ADDRESS is a mandatory field."},
		{"componentId": 1421893, "type": "REQ", "format": "", "errorMessage": "SHIPPING CITY is a mandatory field."},
		{"componentId": 1421895, "type": "REQ", "format": "", "errorMessage": "SHIPPING STATE is a mandatory field."},
		{"componentId": 1421989, "type": "REQ", "format": "", "errorMessage": "Payment Type is a mandatory field."},
		{"componentId": 1421990, "type": "REQ", "format": "", "errorMessage": "Credit Card Number * is a mandatory field."},
		{"componentId": 1421991, "type": "REQ", "format": "", "errorMessage": "CVV * is a mandatory field."},
		{"componentId": 1421992, "type": "REQ", "format": "", "errorMessage": "MM/YYYY* is a mandatory field."},
		{"componentId": 94208, "type": "REQ", "format": "", "errorMessage": "ACH/EFT Authorization is a mandatory field."}],
	"alerts"         : [
		{"type": "MFE", "content": "is a mandatory field."},
		{
			"type"   : "GPE",
			"content": "There has been an error processing this payment. Please check that the credit card, expiry and CVV that were entered are correct. Also please make sure your address and zip code are entered correctly."
		},
		{"type": "CIA", "content": "Error: Invalid Answer."}],
	"premiumGifts"   : {
		"options"    : [
			{"id": 98, "clientId": 9999, "optionTypeId": 20, "createdOn": 1660000000000, "name": "2XL"},
			{"id": 99, "clientId": 9999, "optionTypeId": 20, "createdOn": 1660000000000, "name": "3XL"},
			{"id": 95, "clientId": 9999, "optionTypeId": 20, "createdOn": 1660000000000, "name": "M"},
			{"id": 83, "clientId": 9999, "optionTypeId": 6, "createdOn": 1660000000000, "name": "Please don't send me a t-shirt"},
			{"id": 84, "clientId": 9999, "optionTypeId": 17, "createdOn": 1660000000000, "name": "L"},
			{"id": 90, "clientId": 9999, "optionTypeId": 18, "createdOn": 1660000000000, "name": "Yes, send me a leash"},
			{"id": 91, "clientId": 9999, "optionTypeId": 18, "createdOn": 1660000000000, "name": "No, do not send"},
			{"id": 86, "clientId": 9999, "optionTypeId": 17, "createdOn": 1660000000000},
			{"id": 85, "clientId": 9999, "optionTypeId": 17, "createdOn": 1660000000000, "name": "S"},
			{"id": 96, "clientId": 9999, "optionTypeId": 20, "createdOn": 1660000000000, "name": "L"},
			{"id": 94, "clientId": 9999, "optionTypeId": 20, "createdOn": 1660000000000, "name": "XS"},
			{"id": 97, "clientId": 9999, "optionTypeId": 20, "createdOn": 1660000000000, "name": "XL"},
			{"id": 25, "clientId": 9999, "optionTypeId": 6, "createdOn": 1660000000000, "name": "Select your size"},
			{"id": 23, "clientId": 9999, "optionTypeId": 6, "createdOn": 1660000000000, "name": "XS"},
			{"id": 24, "clientId": 9999, "optionTypeId": 6, "createdOn": 1660000000000, "name": "S"},
			{"id": 81, "clientId": 9999, "optionTypeId": 6, "createdOn": 1660000000000, "name": "M"},
			{"id": 88, "clientId": 9999, "optionTypeId": 17, "createdOn": 1660000000000, "name": "XS"},
			{"id": 89, "clientId": 9999, "optionTypeId": 17, "createdOn": 1660000000000, "name": "XXL"},
			{"id": 92, "clientId": 9999, "optionTypeId": 19, "createdOn": 1660000000000, "name": "Thank you, but please don’t send me a gift."},
			{"id": 93, "clientId": 9999, "optionTypeId": 20, "createdOn": 1660000000000, "name": "S"},
			{"id": 82, "clientId": 9999, "optionTypeId": 6, "createdOn": 1660000000000, "name": "L"},
			{"id": 22, "clientId": 9999, "optionTypeId": 6, "createdOn": 1660000000000, "name": "XL"},
			{"id": 26, "clientId": 9999, "optionTypeId": 6, "createdOn": 1660000000000, "name": "XXL"},
			{"id": 27, "clientId": 9999, "optionTypeId": 6, "createdOn": 1660000000000, "name": "3XL"},
			{"id": 87, "clientId": 9999, "optionTypeId": 17, "createdOn": 1660000000000, "name": "M"},
			{"id": 521, "clientId": 9999, "optionTypeId": 103, "createdOn": 1660000000000, "name": "Donec Ultricies Water Bottle"},
			{"id": 782, "clientId": 9999, "optionTypeId": 156, "createdOn": 1660000000000, "name": "Etiam viverra"},
			{"id": 859, "clientId": 9999, "optionTypeId": 172, "createdOn": 1660000000000, "name": "S"},
			{"id": 862, "clientId": 9999, "optionTypeId": 172, "createdOn": 1660000000000, "name": "XL"},
			{"id": 863, "clientId": 9999, "optionTypeId": 172, "createdOn": 1660000000000, "name": "2XL"},
			{"id": 864, "clientId": 9999, "optionTypeId": 172, "createdOn": 1660000000000, "name": "3XL"},
			{"id": 858, "clientId": 9999, "optionTypeId": 172, "createdOn": 1660000000000, "name": "XS"},
			{"id": 926, "clientId": 9999, "optionTypeId": 179, "createdOn": 1660000000000, "name": "XS"},
			{"id": 928, "clientId": 9999, "optionTypeId": 179, "createdOn": 1660000000000, "name": "L"},
			{"id": 931, "clientId": 9999, "optionTypeId": 179, "createdOn": 1660000000000, "name": "2XL"},
			{"id": 933, "clientId": 9999, "optionTypeId": 180, "createdOn": 1660000000000, "name": "SED UT MASK"},
			{"id": 935, "clientId": 9999, "optionTypeId": 180, "createdOn": 1660000000000, "name": "NULLA FACILISI MASK"},
			{"id": 234, "clientId": 9999, "optionTypeId": 105, "createdOn": 1660000000000, "name": "Aenean imperdiet Water Bottle"},
			{"id": 949, "clientId": 9999, "optionTypeId": 188, "createdOn": 1660000000000, "name": "Donec ultricies Water Bottle"},
			{"id": 513, "clientId": 9999, "optionTypeId": 99, "createdOn": 1660000000000, "name": "Etiam viverra Laces"},
			{"id": 514, "clientId": 9999, "optionTypeId": 99, "createdOn": 1660000000000, "name": "Etiam viverra Socks"},
			{"id": 508, "clientId": 9999, "optionTypeId": 98, "createdOn": 1660000000000, "name": "XS"},
			{"id": 750, "clientId": 9999, "optionTypeId": 146, "createdOn": 1660000000000, "name": "Select your size"},
			{"id": 755, "clientId": 9999, "optionTypeId": 146, "createdOn": 1660000000000, "name": "XL"},
			{"id": 757, "clientId": 9999, "optionTypeId": 146, "createdOn": 1660000000000, "name": "3XL"},
			{"id": 781, "clientId": 9999, "optionTypeId": 156, "createdOn": 1660000000000},
			{"id": 809, "clientId": 9999, "optionTypeId": 163, "createdOn": 1660000000000, "name": "Window 12x18"},
			{"id": 810, "clientId": 9999, "optionTypeId": 163, "createdOn": 1660000000000, "name": "Yard 18x24"},
			{"id": 943, "clientId": 9999, "optionTypeId": 185, "createdOn": 1660000000000, "name": "Lorem Maecenas Hat or Etiam viverra Socks"},
			{"id": 946, "clientId": 9999, "optionTypeId": 187, "createdOn": 1660000000000, "name": "Etiam viverra Socks"},
			{"id": 506, "clientId": 9999, "optionTypeId": 98, "createdOn": 1660000000000, "name": "M"},
			{"id": 751, "clientId": 9999, "optionTypeId": 146, "createdOn": 1660000000000, "name": "XS"},
			{"id": 756, "clientId": 9999, "optionTypeId": 146, "createdOn": 1660000000000, "name": "2XL"},
			{"id": 871, "clientId": 9999, "optionTypeId": 173, "createdOn": 1660000000000, "name": "L"},
			{"id": 872, "clientId": 9999, "optionTypeId": 173, "createdOn": 1660000000000, "name": "3XL"},
			{"id": 111, "clientId": 9999, "optionTypeId": 26, "createdOn": 1660000000000, "name": "Please don’t send me a hat."},
			{"id": 505, "clientId": 9999, "optionTypeId": 98, "createdOn": 1660000000000, "name": "S"},
			{"id": 511, "clientId": 9999, "optionTypeId": 98, "createdOn": 1660000000000, "name": "3XL"},
			{"id": 870, "clientId": 9999, "optionTypeId": 173, "createdOn": 1660000000000, "name": "2XL"},
			{"id": 510, "clientId": 9999, "optionTypeId": 98, "createdOn": 1660000000000, "name": "L"},
			{"id": 512, "clientId": 9999, "optionTypeId": 98, "createdOn": 1660000000000, "name": "3XL"},
			{"id": 527, "clientId": 9999, "optionTypeId": 106, "createdOn": 1660000000000, "name": "Logo Tote"},
			{"id": 944, "clientId": 9999, "optionTypeId": 186, "createdOn": 1660000000000, "name": "Etiam viverra Socks"},
			{"id": 509, "clientId": 9999, "optionTypeId": 98, "createdOn": 1660000000000, "name": "XL"},
			{"id": 507, "clientId": 9999, "optionTypeId": 98, "createdOn": 1660000000000, "name": "XXL"},
			{"id": 531, "clientId": 9999, "optionTypeId": 107, "createdOn": 1660000000000, "name": "Etiam viverra Vestibulum Now Tote"},
			{"id": 860, "clientId": 9999, "optionTypeId": 172, "createdOn": 1660000000000, "name": "M"},
			{"id": 861, "clientId": 9999, "optionTypeId": 172, "createdOn": 1660000000000, "name": "L"},
			{"id": 927, "clientId": 9999, "optionTypeId": 179, "createdOn": 1660000000000, "name": "S"},
			{"id": 942, "clientId": 9999, "optionTypeId": 184, "createdOn": 1660000000000, "name": "Etiam viverra Socks"},
			{"id": 118, "clientId": 9999, "optionTypeId": 28, "createdOn": 1660000000000, "name": "Please don’t send me a scarf."},
			{"id": 520, "clientId": 9999, "optionTypeId": 103, "createdOn": 1660000000000, "name": "Etiam viverra Water Bottle"},
			{"id": 528, "clientId": 9999, "optionTypeId": 106, "createdOn": 1660000000000, "name": "Etiam viverra Vestibulum Tote"},
			{"id": 530, "clientId": 9999, "optionTypeId": 107, "createdOn": 1660000000000, "name": "Select your tote"},
			{"id": 752, "clientId": 9999, "optionTypeId": 146, "createdOn": 1660000000000, "name": "M"},
			{"id": 771, "clientId": 9999, "optionTypeId": 153, "createdOn": 1660000000000, "name": "Aenean imperdiet Mask"},
			{"id": 775, "clientId": 9999, "optionTypeId": 153, "createdOn": 1660000000000, "name": "Lorem Logo Mask"},
			{"id": 817, "clientId": 9999, "optionTypeId": 165, "createdOn": 1660000000000, "name": "Totes Trans"},
			{"id": 819, "clientId": 9999, "optionTypeId": 165, "createdOn": 1660000000000, "name": "Totes Pan"},
			{"id": 948, "clientId": 9999, "optionTypeId": 188, "createdOn": 1660000000000, "name": "Etiam viverra Water Bottle"},
			{"id": 112, "clientId": 9999, "optionTypeId": 26, "createdOn": 1660000000000, "name": "Yes, please send me a hat."},
			{"id": 119, "clientId": 9999, "optionTypeId": 28, "createdOn": 1660000000000, "name": "Yes, please send me a scarf."},
			{"id": 780, "clientId": 9999, "optionTypeId": 156, "createdOn": 1660000000000, "name": "Donec ultricies"},
			{"id": 867, "clientId": 9999, "optionTypeId": 173, "createdOn": 1660000000000, "name": "XL"},
			{"id": 866, "clientId": 9999, "optionTypeId": 173, "createdOn": 1660000000000, "name": "S"},
			{"id": 526, "clientId": 9999, "optionTypeId": 105, "createdOn": 1660000000000, "name": "Etiam viverra Water Bottle"},
			{"id": 753, "clientId": 9999, "optionTypeId": 146, "createdOn": 1660000000000, "name": "S"},
			{"id": 754, "clientId": 9999, "optionTypeId": 146, "createdOn": 1660000000000, "name": "L"},
			{"id": 868, "clientId": 9999, "optionTypeId": 173, "createdOn": 1660000000000, "name": "M"},
			{"id": 114, "clientId": 9999, "optionTypeId": 17, "createdOn": 1660000000000, "name": "Please don't send me a t-shirt"},
			{"id": 115, "clientId": 9999, "optionTypeId": 17, "createdOn": 1660000000000, "name": " "},
			{"id": 525, "clientId": 9999, "optionTypeId": 105, "createdOn": 1660000000000, "name": "Donec ultricies Water Bottle"},
			{"id": 813, "clientId": 9999, "optionTypeId": 165, "createdOn": 1660000000000, "name": "Totes Lorem"},
			{"id": 814, "clientId": 9999, "optionTypeId": 165, "createdOn": 1660000000000, "name": "Totes Donec"},
			{"id": 113, "clientId": 9999, "optionTypeId": 17, "createdOn": 1660000000000, "name": "3XL"},
			{"id": 529, "clientId": 9999, "optionTypeId": 107, "createdOn": 1660000000000, "name": "Lorem Logo Tote"},
			{"id": 532, "clientId": 9999, "optionTypeId": 108, "createdOn": 1660000000000, "name": "Tote"},
			{"id": 772, "clientId": 9999, "optionTypeId": 153, "createdOn": 1660000000000, "name": "Donec ultricies Mask"},
			{"id": 773, "clientId": 9999, "optionTypeId": 153, "createdOn": 1660000000000, "name": "Etiam viverra Mask"},
			{"id": 774, "clientId": 9999, "optionTypeId": 153, "createdOn": 1660000000000, "name": "Vote Mask"},
			{"id": 934, "clientId": 9999, "optionTypeId": 180, "createdOn": 1660000000000, "name": "NO HATE MASK"},
			{"id": 936, "clientId": 9999, "optionTypeId": 180, "createdOn": 1660000000000, "name": "DONEC QUIS MASK"},
			{"id": 116, "clientId": 9999, "optionTypeId": 27, "createdOn": 1660000000000, "name": "Yes, please send me a surprise gift."},
			{"id": 117, "clientId": 9999, "optionTypeId": 27, "createdOn": 1660000000000, "name": "Thank you, but please don’t send me a gift."},
			{"id": 515, "clientId": 9999, "optionTypeId": 100, "createdOn": 1660000000000, "name": "Yes, please send me a Maecenas Box!"},
			{"id": 815, "clientId": 9999, "optionTypeId": 165, "createdOn": 1660000000000, "name": "Totes Bi"},
			{"id": 816, "clientId": 9999, "optionTypeId": 165, "createdOn": 1660000000000, "name": "Totes Queer"},
			{"id": 929, "clientId": 9999, "optionTypeId": 179, "createdOn": 1660000000000, "name": "M"},
			{"id": 930, "clientId": 9999, "optionTypeId": 179, "createdOn": 1660000000000, "name": "XL"},
			{"id": 932, "clientId": 9999, "optionTypeId": 179, "createdOn": 1660000000000, "name": "3XL"},
			{"id": 941, "clientId": 9999, "optionTypeId": 184, "createdOn": 1660000000000, "name": "Maecenas Hat"},
			{"id": 945, "clientId": 9999, "optionTypeId": 187, "createdOn": 1660000000000, "name": "Maecenas Hat"},
			{"id": 950, "clientId": 9999, "optionTypeId": 188, "createdOn": 1660000000000, "name": "Aenean imperdiet Water Bottle"},
			{"id": 818, "clientId": 9999, "optionTypeId": 165, "createdOn": 1660000000000, "name": "Totes Ace"},
			{"id": 820, "clientId": 9999, "optionTypeId": 165, "createdOn": 1660000000000, "name": "Totes Ally"},
			{"id": 869, "clientId": 9999, "optionTypeId": 173, "createdOn": 1660000000000, "name": "XS"},
			{"id": 567, "clientId": 9999, "optionTypeId": 105, "createdOn": 1660000000000, "name": "select your bottle design"},
			{"id": 983, "clientId": 9999, "optionTypeId": 200, "createdOn": 1660000000000, "name": "Baseball Shirt M"},
			{"id": 985, "clientId": 9999, "optionTypeId": 200, "createdOn": 1660000000000, "name": "Baseball Shirt S"},
			{"id": 988, "clientId": 9999, "optionTypeId": 200, "createdOn": 1660000000000, "name": "Duis porta Tank S"},
			{"id": 990, "clientId": 9999, "optionTypeId": 200, "createdOn": 1660000000000, "name": "Duis porta Shirt M"},
			{"id": 994, "clientId": 9999, "optionTypeId": 200, "createdOn": 1660000000000, "name": "Duis porta Shirt S"},
			{"id": 996, "clientId": 9999, "optionTypeId": 200, "createdOn": 1660000000000, "name": "Duis porta Shirt 3XL"},
			{"id": 1032, "clientId": 9999, "optionTypeId": 209, "createdOn": 1660000000000, "name": "S"},
			{"id": 1033, "clientId": 9999, "optionTypeId": 209, "createdOn": 1660000000000, "name": "L"},
			{"id": 1036, "clientId": 9999, "optionTypeId": 209, "createdOn": 1660000000000, "name": "2XL"},
			{"id": 1044, "clientId": 9999, "optionTypeId": 214, "createdOn": 1660000000000},
			{"id": 979, "clientId": 9999, "optionTypeId": 200, "createdOn": 1660000000000, "name": "Maecenas Hat"},
			{"id": 980, "clientId": 9999, "optionTypeId": 201, "createdOn": 1660000000000, "name": "Duis porta Tank S"},
			{"id": 981, "clientId": 9999, "optionTypeId": 202, "createdOn": 1660000000000, "name": "Duis porta Tank M"},
			{"id": 982, "clientId": 9999, "optionTypeId": 200, "createdOn": 1660000000000, "name": "Duis porta Tank XL"},
			{"id": 984, "clientId": 9999, "optionTypeId": 200, "createdOn": 1660000000000, "name": "Baseball Shirt L"},
			{"id": 986, "clientId": 9999, "optionTypeId": 200, "createdOn": 1660000000000, "name": "Duis porta Shirt 2XL"},
			{"id": 987, "clientId": 9999, "optionTypeId": 200, "createdOn": 1660000000000, "name": "Duis porta Tank M"},
			{"id": 989, "clientId": 9999, "optionTypeId": 200, "createdOn": 1660000000000, "name": "Duis porta Tank 2XL"},
			{"id": 991, "clientId": 9999, "optionTypeId": 200, "createdOn": 1660000000000, "name": "Duis porta Tank L"},
			{"id": 992, "clientId": 9999, "optionTypeId": 200, "createdOn": 1660000000000, "name": "Duis porta Shirt XL"},
			{"id": 993, "clientId": 9999, "optionTypeId": 200, "createdOn": 1660000000000, "name": "Baseball Shirt XL"},
			{"id": 995, "clientId": 9999, "optionTypeId": 200, "createdOn": 1660000000000, "name": "Duis porta Shirt L"},
			{"id": 1031, "clientId": 9999, "optionTypeId": 209, "createdOn": 1660000000000, "name": "XS"},
			{"id": 1034, "clientId": 9999, "optionTypeId": 209, "createdOn": 1660000000000, "name": "M"},
			{"id": 1035, "clientId": 9999, "optionTypeId": 209, "createdOn": 1660000000000, "name": "3XL"},
			{"id": 1037, "clientId": 9999, "optionTypeId": 209, "createdOn": 1660000000000, "name": "XL"},
			{"id": 1041, "clientId": 9999, "optionTypeId": 212, "createdOn": 1660000000000, "name": "Etiam viverra Socks"},
			{"id": 1042, "clientId": 9999, "optionTypeId": 212, "createdOn": 1660000000000, "name": "Maecenas Shoelaces"},
			{"id": 1043, "clientId": 9999, "optionTypeId": 213, "createdOn": 1660000000000},
			{"id": 1045, "clientId": 9999, "optionTypeId": 215, "createdOn": 1660000000000, "name": "Maecenas Shoelaces"},
			{"id": 1046, "clientId": 9999, "optionTypeId": 215, "createdOn": 1660000000000, "name": "Etiam viverra Socks"}],
		"rules"      : {
			"single"   : {
				"ranges": [
					{"limit": "39.99", "productIds": []},
					{"limit": "9999", "productIds": [1234]}]
			},
			"recurring": {
				"ranges": [
					{"limit": "9.99", "productIds": []},
					{"limit": "9999", "productIds": [1234]}]
			}
		},
		"optionTypes": [
			{"id": 20, "clientId": 9999, "createdOn": 1660000000000, "name": "DOT SIZES"},
			{"id": 6, "clientId": 9999, "createdOn": 1660000000000, "name": "Select your size"},
			{"id": 18, "clientId": 9999, "createdOn": 1660000000000, "name": "Dog Leash Y/N"},
			{"id": 17, "clientId": 9999, "createdOn": 1660000000000, "name": "Shirt Sizes"},
			{"id": 19, "clientId": 9999, "createdOn": 1660000000000, "name": "Opt Out"},
			{"id": 103, "clientId": 9999, "createdOn": 1660000000000, "name": "Duis porta Water Bottles"},
			{"id": 105, "clientId": 9999, "createdOn": 1660000000000, "name": "Duis porta/Sed ut nisi Water Bottles"},
			{"id": 185, "clientId": 9999, "createdOn": 1660000000000, "name": "Duis porta Laces or Socks"},
			{"id": 28, "clientId": 9999, "createdOn": 1660000000000, "name": "Scarf Opt Out"},
			{"id": 98, "clientId": 9999, "createdOn": 1660000000000, "name": "Curabitur Shirt Size"},
			{"id": 106, "clientId": 9999, "createdOn": 1660000000000, "name": "Tote Type"},
			{"id": 146, "clientId": 9999, "createdOn": 1660000000000, "name": "Etiam viverra Shirt Size"},
			{"id": 153, "clientId": 9999, "createdOn": 1660000000000, "name": "Mask Style"},
			{"id": 172, "clientId": 9999, "createdOn": 1660000000000, "name": "Lorem Zip-Up size"},
			{"id": 179, "clientId": 9999, "createdOn": 1660000000000, "name": "Baseball Shirt Sizes"},
			{"id": 186, "clientId": 9999, "createdOn": 1660000000000, "name": "Etiam viverra Socks"},
			{"id": 188, "clientId": 9999, "createdOn": 1660000000000, "name": "Lorem Ipsum Water Bottles"},
			{"id": 26, "clientId": 9999, "createdOn": 1660000000000, "name": "Hat Opt Out"},
			{"id": 99, "clientId": 9999, "createdOn": 1660000000000, "name": "Laces Socks"},
			{"id": 107, "clientId": 9999, "createdOn": 1660000000000, "name": "Lorem Totes Email 3"},
			{"id": 165, "clientId": 9999, "createdOn": 1660000000000, "name": "Identity Totes"},
			{"id": 173, "clientId": 9999, "createdOn": 1660000000000, "name": "Vestibulum Shirt Size"},
			{"id": 180, "clientId": 9999, "createdOn": 1660000000000, "name": "Nulla masks"},
			{"id": 27, "clientId": 9999, "createdOn": 1660000000000, "name": "Surprise Gift"},
			{"id": 100, "clientId": 9999, "createdOn": 1660000000000, "name": "Maecenas Box"},
			{"id": 108, "clientId": 9999, "createdOn": 1660000000000, "name": "QUISQUE Tote"},
			{"id": 156, "clientId": 9999, "createdOn": 1660000000000, "name": "Water Bottle Color"},
			{"id": 163, "clientId": 9999, "createdOn": 1660000000000, "name": "yard or window sign"},
			{"id": 184, "clientId": 9999, "createdOn": 1660000000000, "name": "Maecenas Hat"},
			{"id": 187, "clientId": 9999, "createdOn": 1660000000000, "name": "Maecenas Hat or Etiam Viverra Socks"},
			{"id": 214, "clientId": 9999, "createdOn": 1660000000000, "name": "Maecenas Shoelaces"},
			{"id": 209, "clientId": 9999, "createdOn": 1660000000000, "name": "Nulla Leo Sizes"},
			{"id": 212, "clientId": 9999, "createdOn": 1660000000000},
			{"id": 213, "clientId": 9999, "createdOn": 1660000000000, "name": "Maecenas Shoelaces"},
			{"id": 200, "clientId": 9999, "createdOn": 1660000000000, "name": "MAECENAS"},
			{"id": 215, "clientId": 9999, "createdOn": 1660000000000, "name": "Lorem Maecenas Shoelaces OR Etiam viverra Socks"}],
		"products"   : [
			{
				"id"               : 1234,
				"clientId"         : 9999,
				"productType"      : "PREMIUM",
				"createdOn"        : 1660000000000,
				"modifiedOn"       : 1660000000000,
				"dateAvailable"    : 1660000000000,
				"digital"          : false,
				"status"           : "ACTIVE",
				"symGiftTemplateId": 0,
				"name"             : "Donec eget neque",
				"description"      : "Yes, eget neque at est faucibus semper at sed lacus.",
				"categories"       : [],
				"images"           : [],
				"tags"             : [],
				"optionTypes"      : [
					{
						"id"       : 105,
						"clientId" : 9999,
						"createdOn": 1660000000000,
						"names"    : [
							{
								"id"         : 6789,
								"entityOwner": null,
								"clientId"   : 9999,
								"type"       : "OPTION_TYPE",
								"typeId"     : 105,
								"locale"     : "en-US",
								"content"    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
								"createdOn"  : 1660000000000,
								"modifiedOn" : 1660000000000
							}]
					}],
				"variants"         : [
					{
						"id"                   : 4143,
						"clientId"             : 9999,
						"productId"            : 1234,
						"sku"                  : "h2obottles",
						"createdOn"            : 1660000000000,
						"modifiedOn"           : 1660000000000,
						"quantityTotal"        : 0,
						"quantitySold"         : 0,
						"price"                : 40,
						"displayOrder"         : 0,
						"name"                 : "Aenean Imperdiet Water Bottles",
						"productVariantOptions": []
					},
					{
						"id"                   : 4567,
						"clientId"             : 9999,
						"productId"            : 1234,
						"sku"                  : "select",
						"createdOn"            : 1660000000000,
						"modifiedOn"           : 1660000000000,
						"quantityTotal"        : -1,
						"quantitySold"         : 0,
						"price"                : 40,
						"displayOrder"         : 1,
						"name"                 : "Aenean Imperdiet Water Bottles",
						"productVariantOptions": [
							{"id": 3456, "clientId": 9999, "productVariantId": 4567, "optionId": 567, "createdOn": 1660000000000}]
					},
					{
						"id"                   : 1123,
						"clientId"             : 9999,
						"productId"            : 1234,
						"sku"                  : "bih2o",
						"createdOn"            : 1660000000000,
						"modifiedOn"           : 1660000000000,
						"quantityTotal"        : 700,
						"quantitySold"         : 0,
						"price"                : 40,
						"displayOrder"         : 2,
						"name"                 : "Aenean Imperdiet Water Bottles",
						"productVariantOptions": [
							{"id": 9012, "clientId": 9999, "productVariantId": 1123, "optionId": 234, "createdOn": 1660000000000}]
					},
					{
						"id"                   : 5678,
						"clientId"             : 9999,
						"productId"            : 1234,
						"sku"                  : "rbowh2o",
						"createdOn"            : 1660000000000,
						"modifiedOn"           : 1660000000000,
						"quantityTotal"        : 2000,
						"quantitySold"         : 0,
						"price"                : 40,
						"displayOrder"         : 3,
						"name"                 : "Aenean Imperdiet Water Bottles",
						"productVariantOptions": [
							{"id": 3456, "clientId": 9999, "productVariantId": 5678, "optionId": 526, "createdOn": 1660000000000}]
					},
					{
						"id"                   : 2345,
						"clientId"             : 9999,
						"productId"            : 1234,
						"sku"                  : "transh2o",
						"createdOn"            : 1660000000000,
						"modifiedOn"           : 1660000000000,
						"quantityTotal"        : 700,
						"quantitySold"         : 0,
						"price"                : 40,
						"displayOrder"         : 4,
						"name"                 : "Aenean Imperdiet Water Bottles",
						"productVariantOptions": [
							{"id": 4461, "clientId": 9999, "productVariantId": 2345, "optionId": 525, "createdOn": 1660000000000}]
					}],
				"senderId"         : 0
			}]
	},
	"paymentGateways": [],
	"feeCover"       : {"feeCover": {"type": "PERCENT", "maxAmount": "100", "percent": "5", "additionalAmount": null}},
	"upsell"         : [{
		"componentId": 593841,
		"name": "Fake Upsell",
		"jsonContent": "{\"single\":{\"imageDisplay\":\"left\",\"imageUrl\":\"\",\"acceptButtonLabel\":\"YES! Process my recurring gift of {upsell_amount}\",\"declineButtonLabel\":\"Not today. Process my one-time gift of {current_amount}\",\"content\":\"<h2>Thank you! Before we process your donation, will you start a {upsell_amount} recurring gift instead?</h2>\\n\\n<p>Vestibulum quis purus eu libero efficitur mollis a vel ipsum. Aliquam hendrerit congue ante, non tincidunt ex lacinia vitae.</p>\\n\",\"rules\":[{\"triggerMin\":\"1\",\"triggerMax\":\"100\",\"upsellValue\":\"10\",\"upsellType\":\"% of the original amount\",\"roundType\":\"up\",\"roundValue\":\"1\",\"triggerCurrency\":\"USD\"}],\"enable\":true},\"recurring\":{\"imageDisplay\":\"left\",\"imageUrl\":\"\",\"acceptButtonLabel\":\"YES! Process my recurring gift of {upsell_amount}\",\"declineButtonLabel\":\"Not today. Process my original gift of {current_amount}\",\"content\":\"<h2>Thank you! Before we process your donation, will you make it a {upsell_amount} recurring gift instead?</h2>\\n\\n<p>Vestibulum quis purus eu libero efficitur mollis a vel ipsum. Aliquam hendrerit congue ante, non tincidunt ex lacinia vitae.</p>\\n\",\"rules\":[{\"triggerMin\":\"1\",\"triggerMax\":\"100\",\"upsellValue\":\"20\",\"upsellType\":\"% of the original amount\",\"roundType\":\"up\",\"roundValue\":\"1\",\"triggerCurrency\":\"USD\"}],\"enable\":true},\"autoSubmit\":\"0\"}"
	}],
	"productVariants": {
		"selprodvariantid": 0,
		"productVariants" : [
			{"id": 4143, "quantitySold": 0},
			{"id": 4567, "quantitySold": 0},
			{"id": 1123, "quantitySold": 12},
			{"id": 5678, "quantitySold": 91},
			{"id": 2345, "quantitySold": 22}]
	}
}
