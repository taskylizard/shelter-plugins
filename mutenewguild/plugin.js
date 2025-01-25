(function(exports) {

"use strict";

//#region plugins/mutenewguild/index.ts
const { flux, http } = shelter;
function handleJoin({ invite: { guild: { id } } }) {
	http.patch({
		body: {
			muted: true,
			suppress_everyone: true,
			suppress_roles: true
		},
		url: `/users/@me/guilds/${id}/settings`
	});
}
function onLoad() {
	flux.dispatcher.subscribe("INVITE_ACCEPT_SUCCESS", handleJoin);
}
function onUnload() {
	flux.dispatcher.unsubscribe("INVITE_ACCEPT_SUCCESS", handleJoin);
}

//#endregion
exports.onLoad = onLoad
exports.onUnload = onUnload
return exports;
})({});