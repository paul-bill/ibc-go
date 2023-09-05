(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{680:function(e,t,a){"use strict";a.r(t);var o=a(1),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"genesis-metadata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#genesis-metadata"}},[e._v("#")]),e._v(" Genesis metadata")]),e._v(" "),a("p",{attrs:{synopsis:""}},[e._v("Learn how to implement the "),a("code",[e._v("ExportMetadata")]),e._v(" interface")]),e._v(" "),a("h2",{attrs:{id:"pre-requisite-readings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[e._v("#")]),e._v(" Pre-requisite readings")]),e._v(" "),a("ul",[a("li",{attrs:{prereq:""}},[a("a",{attrs:{href:"https://docs.cosmos.network/v0.47/building-modules/genesis",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos SDK module genesis"),a("OutboundLink")],1)])]),e._v(" "),a("p",[a("code",[e._v("ClientState")]),e._v(" instances are provided their own isolated and namespaced client store upon initialisation. "),a("code",[e._v("ClientState")]),e._v(" implementations may choose to store any amount of arbitrary metadata in order to verify counterparty consensus state and perform light client updates correctly.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("ExportMetadata")]),e._v(" method of the "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/exported/client.go#L47",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("ClientState")]),e._v(" interface"),a("OutboundLink")],1),e._v(" provides light client modules with the ability to persist metadata in genesis exports.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"RXhwb3J0TWV0YWRhdGEoY2xpZW50U3RvcmUgc2RrLktWU3RvcmUpIFtdR2VuZXNpc01ldGFkYXRhCg=="}}),e._v(" "),a("p",[a("code",[e._v("ExportMetadata")]),e._v(" is provided the client store and returns an array of "),a("code",[e._v("GenesisMetadata")]),e._v(". For maximum flexibility, "),a("code",[e._v("GenesisMetadata")]),e._v(" is defined as a simple interface containing two distinct "),a("code",[e._v("Key")]),e._v(" and "),a("code",[e._v("Value")]),e._v(" accessor methods.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBHZW5lc2lzTWV0YWRhdGEgaW50ZXJmYWNlIHsKICAvLyByZXR1cm4gc3RvcmUga2V5IHRoYXQgY29udGFpbnMgbWV0YWRhdGEgd2l0aG91dCBjbGllbnRJRC1wcmVmaXgKICBHZXRLZXkoKSBbXWJ5dGUKICAvLyByZXR1cm5zIG1ldGFkYXRhIHZhbHVlCiAgR2V0VmFsdWUoKSBbXWJ5dGUKfQo="}}),e._v(" "),a("p",[e._v("This allows "),a("code",[e._v("ClientState")]),e._v(" instances to retrieve and export any number of key-value pairs which are maintained within the store in their raw "),a("code",[e._v("[]byte")]),e._v(" form.")]),e._v(" "),a("p",[e._v("When a chain is started with a "),a("code",[e._v("genesis.json")]),e._v(" file which contains "),a("code",[e._v("ClientState")]),e._v(" metadata (for example, when performing manual upgrades using an exported "),a("code",[e._v("genesis.json")]),e._v(") the "),a("code",[e._v("02-client")]),e._v(" submodule of core IBC will handle setting the key-value pairs within their respective client stores. "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/02-client/genesis.go#L18-L22",target:"_blank",rel:"noopener noreferrer"}},[e._v("See "),a("code",[e._v("02-client")]),e._v(" "),a("code",[e._v("InitGenesis")]),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Please refer to the "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/light-clients/07-tendermint/genesis.go#L12",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tendermint light client implementation"),a("OutboundLink")],1),e._v(" for an example.")])],1)}),[],!1,null,null,null);t.default=s.exports}}]);