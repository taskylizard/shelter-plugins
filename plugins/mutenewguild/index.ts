const { flux, http } = shelter;

function handleJoin({
  invite: {
    guild: { id },
  },
}) {
  http.patch({
    body: { muted: true, suppress_everyone: true, suppress_roles: true },
    url: `/users/@me/guilds/${id}/settings`,
  });
}

export function onLoad() {
  flux.dispatcher.subscribe("INVITE_ACCEPT_SUCCESS", handleJoin);
}

export function onUnload() {
  flux.dispatcher.unsubscribe("INVITE_ACCEPT_SUCCESS", handleJoin);
}
