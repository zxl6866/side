import { ArrowForwardIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Input,
  InputGroup,
  InputLeftAddon,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import emailjs from "@emailjs/browser";
import "./index.css";

export function Modal({ setIsOpen }: { setIsOpen: (open: boolean) => void }) {
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [twitter, setTwitter] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const toast = useToast();
  const toastIdRef = React.useRef<any>();
  function closeLoadingToast() {
    setLoading(false);
    if (toastIdRef.current) {
      toast.close(toastIdRef.current);
    }
  }
  const handleSubmit = async () => {
    if (loading) return;
    const nameError = !name;
    const emailError =
      !email || !email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    if (nameError || emailError) {
      console.log("name error: ", nameError);
      console.log("emailError error: ", emailError);

      toast({
        description: "Please check your inputs.",
        status: "error",
        duration: 2000,
        isClosable: false,
      });
    } else {
      const serviceId = process.env.REACT_APP_SERVICE_ID;
      const messageTemplateId =
        process.env.REACT_APP_MESSAGE_WAITLIST_TEMPLATE_ID;
      const thanksTemplateId =
        process.env.REACT_APP_THANKS_WAITLIST_TEMPLATE_ID;
      const pubkey = process.env.REACT_APP_PUBKEY;
      if (!serviceId || !messageTemplateId || !thanksTemplateId || !pubkey) {
        console.error("Missing env variables");
        return;
      }
      setLoading(true);
      toastIdRef.current = toast({
        description: "loading...",
        status: "success",
        duration: 60_000,
      });

      await emailjs.send(
        serviceId,
        messageTemplateId,
        {
          from_name: "d3x join waitlist page",
          to_name: "D3X",
          message: JSON.stringify({ name, email, twitter }),
        },
        pubkey
      );

      emailjs
        .send(
          serviceId,
          thanksTemplateId,
          {
            from_name: name,
            from_address: email,
          },
          pubkey
        )
        .then(
          (result) => {
            console.log(result);
            closeLoadingToast();
            toast({
              description: "Now you are in the waitlist.",
              status: "success",
              duration: 2000,
            });
          },
          (error) => {
            console.log(error);
            closeLoadingToast();
            toast({
              description:
                "Email service error, contact info@d3x.xyz for help.",
              status: "error",
            });
          }
        );
    }
  };
  const mediaQuery = window.screen;
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <CloseIcon boxSize={6} />
          </button>
          <Box className="modalContent">
            <Box className="modalJoinWaitlistContainer">
              <Box className="modalJoin">Join</Box>
              <Box className="modalWaitlist">Waitlist</Box>
            </Box>
            <Box className="modalInput">
              <InputGroup size={mediaQuery.availWidth > 768 ? "lg" : "sm"}>
                <InputLeftAddon
                  style={{
                    background: "transparent",
                    borderRight: "none",
                    borderWidth: "2px",
                    borderColor: "rgba(255, 255, 255, 0.05)",
                  }}
                  children={
                    <>
                      <span>Name</span>
                      <span style={{ color: "red" }}>*</span>:
                    </>
                  }
                />
                <Input
                  style={{
                    borderLeft: "none",
                    borderWidth: "2px",
                    borderColor: "rgba(255, 255, 255, 0.05)",
                  }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </InputGroup>
            </Box>
            <Box className="modalInput">
              <InputGroup size={mediaQuery.availWidth > 768 ? "lg" : "sm"}>
                <InputLeftAddon
                  style={{
                    background: "transparent",
                    borderRight: "none",
                    borderWidth: "2px",
                    borderColor: "rgba(255, 255, 255, 0.05)",
                  }}
                  children={
                    <>
                      <span>Email</span>
                      <span style={{ color: "red" }}>*</span>:
                    </>
                  }
                />
                <Input
                  style={{
                    borderLeft: "none",
                    borderWidth: "2px",
                    borderColor: "rgba(255, 255, 255, 0.05)",
                  }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputGroup>
            </Box>
            <Box className="modalInput">
              <InputGroup size={mediaQuery.availWidth > 768 ? "lg" : "sm"}>
                <InputLeftAddon
                  style={{
                    background: "transparent",
                    borderRight: "none",
                    borderWidth: "2px",
                    borderColor: "rgba(255, 255, 255, 0.05)",
                  }}
                  children="Twitter:"
                />
                <Input
                  style={{
                    borderLeft: "none",
                    borderWidth: "2px",
                    borderColor: "rgba(255, 255, 255, 0.05)",
                  }}
                  value={twitter}
                  onChange={(e) => setTwitter(e.target.value)}
                />
              </InputGroup>
            </Box>
          </Box>
          <Box className="modalJoinButton" onClick={handleSubmit}>
            <Box className="modalJoinButtonText">Join the Waitlist</Box>
            <Box className="modalJoinButtonForward">
              <ArrowForwardIcon boxSize={6} />
            </Box>
            <Box></Box>
          </Box>
          <Box className="modalDexLogo"></Box>
        </div>
      </div>
    </>
  );
}
