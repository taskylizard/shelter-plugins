import type { Component } from "solid-js";

const {
    ui: {
        ModalRoot,
        ModalHeader,
        ModalConfirmFooter,
        ModalSizes,
        Header,
        HeaderTags,
        TextBox,
        Divider,
        Button,
    },
    solid: { createSignal },
    plugin: { store },
} = shelter;

interface Props {
    close: () => void;
    apiUrl: string;
}

const OAuthModal: Component<Props> = (props) => {
    const [token, setToken] = createSignal("");

    return (
        <ModalRoot size={ModalSizes.SMALL}>
            <ModalHeader close={close}>Authorize</ModalHeader>
            <div style={{ display: "flex", "flex-direction": "column", gap: "0.25rem", padding: "16px", "padding-top": 0 }}>
                <Header tag={HeaderTags.H5}>1. Authorize via your web browser, and copy the token</Header>
                <Button style={{ width: "100%" }} onClick={() => open(props.apiUrl)}>Authorize</Button>
                <Divider mt="0.25rem" />
                <Header tag={HeaderTags.H5}>2. Paste the token into the textbox</Header>
                <TextBox placeholder="token-goes-here" value={token()} onInput={setToken} />
            </div>
            <ModalConfirmFooter
                type="neutral"
                close={close}
                // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
                onConfirm={() => store.token = token()}
            />
        </ModalRoot>
    )
};

export default OAuthModal;