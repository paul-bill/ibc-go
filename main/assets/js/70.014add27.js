(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{634:function(e,a,c){"use strict";c.r(a);var l=c(1),t=Object(l.a)({},(function(){var e=this,a=e.$createElement,c=e._self._c||a;return c("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[c("h1",{attrs:{id:"keeper-api"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#keeper-api"}},[e._v("#")]),e._v(" Keeper API")]),e._v(" "),c("h2",{attrs:{id:"deprecation-notice"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#deprecation-notice"}},[e._v("#")]),e._v(" Deprecation Notice")]),e._v(" "),c("p",[c("strong",[e._v("This document is deprecated and will be removed in future releases")]),e._v(".")]),e._v(" "),c("p",[e._v("The controller submodule keeper exposes two legacy functions that allow respectively for custom authentication modules to register interchain accounts and send packets to the interchain account.")]),e._v(" "),c("h2",{attrs:{id:"registerinterchainaccount"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#registerinterchainaccount"}},[e._v("#")]),e._v(" "),c("code",[e._v("RegisterInterchainAccount")])]),e._v(" "),c("p",[e._v("The authentication module can begin registering interchain accounts by calling "),c("code",[e._v("RegisterInterchainAccount")]),e._v(":")]),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aWYgZXJyIDo9IGtlZXBlci5pY2FDb250cm9sbGVyS2VlcGVyLlJlZ2lzdGVySW50ZXJjaGFpbkFjY291bnQoY3R4LCBjb25uZWN0aW9uSUQsIG93bmVyLlN0cmluZygpLCB2ZXJzaW9uKTsgZXJyICE9IG5pbCB7CiAgcmV0dXJuIGVycgp9CgpyZXR1cm4gbmlsCg=="}}),e._v(" "),c("p",[e._v("The "),c("code",[e._v("version")]),e._v(" argument is used to support ICS-29 fee middleware for relayer incentivization of ICS-27 packets. Consumers of the "),c("code",[e._v("RegisterInterchainAccount")]),e._v(" are expected to build the appropriate JSON encoded version string themselves and pass it accordingly. If an empty string is passed in the "),c("code",[e._v("version")]),e._v(" argument, then the version will be initialized to a default value in the "),c("code",[e._v("OnChanOpenInit")]),e._v(" callback of the controller's handler, so that channel handshake can proceed.")]),e._v(" "),c("p",[e._v("The following code snippet illustrates how to construct an appropriate interchain accounts "),c("code",[e._v("Metadata")]),e._v(" and encode it as a JSON bytestring:")]),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aWNhTWV0YWRhdGEgOj0gaWNhdHlwZXMuTWV0YWRhdGF7CiAgVmVyc2lvbjogICAgICAgICAgICAgICAgaWNhdHlwZXMuVmVyc2lvbiwKICBDb250cm9sbGVyQ29ubmVjdGlvbklkOiBjb250cm9sbGVyQ29ubmVjdGlvbklELAogIEhvc3RDb25uZWN0aW9uSWQ6ICAgICAgIGhvc3RDb25uZWN0aW9uSUQsCiAgRW5jb2Rpbmc6ICAgICAgICAgICAgICAgaWNhdHlwZXMuRW5jb2RpbmdQcm90b2J1ZiwKICBUeFR5cGU6ICAgICAgICAgICAgICAgICBpY2F0eXBlcy5UeFR5cGVTREtNdWx0aU1zZywKfQoKYXBwVmVyc2lvbiwgZXJyIDo9IGljYXR5cGVzLk1vZHVsZUNkYy5NYXJzaGFsSlNPTigmYW1wO2ljYU1ldGFkYXRhKQppZiBlcnIgIT0gbmlsIHsKICByZXR1cm4gZXJyCn0KCmlmIGVyciA6PSBrZWVwZXIuaWNhQ29udHJvbGxlcktlZXBlci5SZWdpc3RlckludGVyY2hhaW5BY2NvdW50KGN0eCwgY29udHJvbGxlckNvbm5lY3Rpb25JRCwgb3duZXIuU3RyaW5nKCksIHN0cmluZyhhcHBWZXJzaW9uKSk7IGVyciAhPSBuaWwgewogIHJldHVybiBlcnIKfQo="}}),e._v(" "),c("p",[e._v("Similarly, if the application stack is configured to route through ICS-29 fee middleware and a fee enabled channel is desired, construct the appropriate ICS-29 "),c("code",[e._v("Metadata")]),e._v(" type:")]),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aWNhTWV0YWRhdGEgOj0gaWNhdHlwZXMuTWV0YWRhdGF7CiAgVmVyc2lvbjogICAgICAgICAgICAgICAgaWNhdHlwZXMuVmVyc2lvbiwKICBDb250cm9sbGVyQ29ubmVjdGlvbklkOiBjb250cm9sbGVyQ29ubmVjdGlvbklELAogIEhvc3RDb25uZWN0aW9uSWQ6ICAgICAgIGhvc3RDb25uZWN0aW9uSUQsCiAgRW5jb2Rpbmc6ICAgICAgICAgICAgICAgaWNhdHlwZXMuRW5jb2RpbmdQcm90b2J1ZiwKICBUeFR5cGU6ICAgICAgICAgICAgICAgICBpY2F0eXBlcy5UeFR5cGVTREtNdWx0aU1zZywKfQoKYXBwVmVyc2lvbiwgZXJyIDo9IGljYXR5cGVzLk1vZHVsZUNkYy5NYXJzaGFsSlNPTigmYW1wO2ljYU1ldGFkYXRhKQppZiBlcnIgIT0gbmlsIHsKICByZXR1cm4gZXJyCn0KCmZlZU1ldGFkYXRhIDo9IGZlZXR5cGVzLk1ldGFkYXRhewogIEFwcFZlcnNpb246IHN0cmluZyhhcHBWZXJzaW9uKSwKICBGZWVWZXJzaW9uOiBmZWV0eXBlcy5WZXJzaW9uLAp9CgpmZWVFbmFibGVkVmVyc2lvbiwgZXJyIDo9IGZlZXR5cGVzLk1vZHVsZUNkYy5NYXJzaGFsSlNPTigmYW1wO2ZlZU1ldGFkYXRhKQppZiBlcnIgIT0gbmlsIHsKICByZXR1cm4gZXJyCn0KCmlmIGVyciA6PSBrZWVwZXIuaWNhQ29udHJvbGxlcktlZXBlci5SZWdpc3RlckludGVyY2hhaW5BY2NvdW50KGN0eCwgY29udHJvbGxlckNvbm5lY3Rpb25JRCwgb3duZXIuU3RyaW5nKCksIHN0cmluZyhmZWVFbmFibGVkVmVyc2lvbikpOyBlcnIgIT0gbmlsIHsKICByZXR1cm4gZXJyCn0K"}}),e._v(" "),c("h2",{attrs:{id:"sendtx"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#sendtx"}},[e._v("#")]),e._v(" "),c("code",[e._v("SendTx")])]),e._v(" "),c("p",[e._v("The authentication module can attempt to send a packet by calling "),c("code",[e._v("SendTx")]),e._v(":")]),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQXV0aGVudGljYXRlIG93bmVyCi8vIHBlcmZvcm0gY3VzdG9tIGxvZ2ljCiAgICAKLy8gQ29uc3RydWN0IGNvbnRyb2xsZXIgcG9ydElEIGJhc2VkIG9uIGludGVyY2hhaW4gYWNjb3VudCBvd25lciBhZGRyZXNzCnBvcnRJRCwgZXJyIDo9IGljYXR5cGVzLk5ld0NvbnRyb2xsZXJQb3J0SUQob3duZXIuU3RyaW5nKCkpCmlmIGVyciAhPSBuaWwgewogIHJldHVybiBlcnIKfQogICAgCi8vIE9idGFpbiBkYXRhIHRvIGJlIHNlbnQgdG8gdGhlIGhvc3QgY2hhaW4uIAovLyBJbiB0aGlzIGV4YW1wbGUsIHRoZSBvd25lciBvZiB0aGUgaW50ZXJjaGFpbiBhY2NvdW50IHdvdWxkIGxpa2UgdG8gc2VuZCBhIGJhbmsgTXNnU2VuZCB0byB0aGUgaG9zdCBjaGFpbi4gCi8vIFRoZSBhcHByb3ByaWF0ZSBzZXJpYWxpemF0aW9uIGZ1bmN0aW9uIHNob3VsZCBiZSBjYWxsZWQuIFRoZSBob3N0IGNoYWluIG11c3QgYmUgYWJsZSB0byBkZXNlcmlhbGl6ZSB0aGUgdHJhbnNhY3Rpb24uIAovLyBJZiB0aGUgaG9zdCBjaGFpbiBpcyB1c2luZyB0aGUgaWJjLWdvIGhvc3QgbW9kdWxlLCBgU2VyaWFsaXplQ29zbW9zVHhgIHNob3VsZCBiZSB1c2VkLiAKbXNnIDo9ICZhbXA7YmFua3R5cGVzLk1zZ1NlbmR7RnJvbUFkZHJlc3M6IGZyb21BZGRyLCBUb0FkZHJlc3M6IHRvQWRkciwgQW1vdW50OiBhbXR9CmRhdGEsIGVyciA6PSBpY2F0eXBlcy5TZXJpYWxpemVDb3Ntb3NUeChrZWVwZXIuY2RjLCBbXXByb3RvLk1lc3NhZ2V7bXNnfSkKaWYgZXJyICE9IG5pbCB7CiAgcmV0dXJuIGVycgp9CgovLyBDb25zdHJ1Y3QgcGFja2V0IGRhdGEKcGFja2V0RGF0YSA6PSBpY2F0eXBlcy5JbnRlcmNoYWluQWNjb3VudFBhY2tldERhdGF7CiAgVHlwZTogaWNhdHlwZXMuRVhFQ1VURV9UWCwKICBEYXRhOiBkYXRhLAp9CgovLyBPYnRhaW4gdGltZW91dCB0aW1lc3RhbXAKLy8gQW4gYXBwcm9wcmlhdGUgdGltZW91dCB0aW1lc3RhbXAgbXVzdCBiZSBkZXRlcm1pbmVkIGJhc2VkIG9uIHRoZSB1c2FnZSBvZiB0aGUgaW50ZXJjaGFpbiBhY2NvdW50LgovLyBJZiB0aGUgcGFja2V0IHRpbWVzIG91dCwgdGhlIGNoYW5uZWwgd2lsbCBiZSBjbG9zZWQgcmVxdWlyaW5nIGEgbmV3IGNoYW5uZWwgdG8gYmUgY3JlYXRlZC4KdGltZW91dFRpbWVzdGFtcCA6PSBvYnRhaW5UaW1lb3V0VGltZXN0YW1wKCkKCi8vIFNlbmQgdGhlIGludGVyY2hhaW4gYWNjb3VudHMgcGFja2V0LCByZXR1cm5pbmcgdGhlIHBhY2tldCBzZXF1ZW5jZQovLyBBIG5pbCBjaGFubmVsIGNhcGFiaWxpdHkgY2FuIGJlIHBhc3NlZCwgc2luY2UgdGhlIGNvbnRyb2xsZXIgc3VibW9kdWxlIChhbmQgbm90IHRoZSBhdXRoZW50aWNhdGlvbiBtb2R1bGUpIAovLyBjbGFpbXMgdGhlIGNoYW5uZWwgY2FwYWJpbGl0eSBzaW5jZSBpYmMtZ28gdjYuCnNlcSwgZXJyID0ga2VlcGVyLmljYUNvbnRyb2xsZXJLZWVwZXIuU2VuZFR4KGN0eCwgbmlsLCBwb3J0SUQsIHBhY2tldERhdGEsIHRpbWVvdXRUaW1lc3RhbXApCg=="}}),e._v(" "),c("p",[e._v("The data within an "),c("code",[e._v("InterchainAccountPacketData")]),e._v(" must be serialized using a format supported by the host chain.\nIf the host chain is using the ibc-go host chain submodule, "),c("code",[e._v("SerializeCosmosTx")]),e._v(" should be used. If the "),c("code",[e._v("InterchainAccountPacketData.Data")]),e._v(" is serialized using a format not supported by the host chain, the packet will not be successfully received.")])],1)}),[],!1,null,null,null);a.default=t.exports}}]);