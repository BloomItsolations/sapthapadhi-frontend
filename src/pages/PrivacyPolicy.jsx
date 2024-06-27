import React from "react";
import { Box, Typography, Link } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        flexDirection: "column",
        minHeight: "100vh",
        color: "#000000",
        paddingX: 6,
        paddingY: 7,
      }}
    >
      <Typography variant="p" fontSize={"24px"} fontWeight={"500"} gutterBottom>
        Privacy Policy
      </Typography>

      <Typography variant="p" fontWeight={"400"} fontSize={"21px"} paragraph>
        Effective Date: January 2023 onwards
      </Typography>

      <Typography variant="p" fontSize={"18px"} lineHeight={"1.7"} paragraph>
        My welth help solution Online Service Pvt Ltd. ("My welth help solution," "we," "us," or "our")
        operates the My welth help solution website (the "Website") and My welth help solution mobile
        application available on the Play Store (the "App"). This Privacy Policy
        outlines our practices regarding the collection, use, and disclosure of
        personal information when you use our Website and App.
      </Typography>

      <Typography variant="p" fontSize={"18px"} lineHeight={"1.7"} paragraph>
        By accessing or using our Website and App, you agree to the collection
        and use of information in accordance with this Privacy Policy. If you do
        not agree with the terms of this Privacy Policy, please do not use our
        Website and App.
      </Typography>
      <Typography variant="p" fontWeight={"500"} fontSize={"23px"}>
        Information We Collect
      </Typography>

      <Typography variant="p" fontSize={"18px"} lineHeight={"1.7"} paragraph>
        We collect several types of information for various purposes to provide
        and improve our services to you.
      </Typography>
      <Typography variant="p" fontWeight={"500"} fontSize={"23px"}>
        Personal Information
      </Typography>

      <Typography variant="p" fontSize={"18px"} lineHeight={"1.7"} paragraph>
        When you use our Website and App, we may collect personal information
        such as your name, email address, postal address, phone number, and
        payment information. We collect this information when you register an
        account, make a purchase, or communicate with us.
      </Typography>
      <Typography variant="p" fontWeight={"500"} fontSize={"23px"}>
        Usage Data
      </Typography>

      <Typography variant="p" fontSize={"18px"} lineHeight={"1.7"} paragraph>
        We may also collect information on how our Website and App are accessed
        and used ("Usage Data"). This Usage Data may include information such as
        your device's Internet Protocol address (e.g., IP address), browser
        type, browser version, the pages of our Website that you visit, the time
        and date of your visit, the time spent on those pages, unique device
        identifiers, and other diagnostic data.
      </Typography>
      <Typography variant="p" fontWeight={"500"} fontSize={"23px"}>
        Tracking & Cookies Data
      </Typography>

      <Typography variant="p" fontSize={"18px"} lineHeight={"1.7"} paragraph>
        e cookies and similar tracking technologies to track the activity on our
        Website and App and hold certain information. Cookies are files with a
        small amount of data that may include an anonymous unique identifier.
        You can instruct your browser to refuse all cookies or to indicate when
        a cookie is being sent. However, if you do not accept cookies, you may
        not be able to use some portions of our Website and App.
      </Typography>

      <Typography variant="p" fontWeight={"500"} fontSize={"23px"}>
        Use of Information{" "}
      </Typography>

      <Typography variant="p" fontSize={"18px"} lineHeight={"1.7"} paragraph>
        <ul>
          <li>To provide and maintain our Website and App</li>
          <li>To notify you about changes to our Website and App</li>
          <li>
            To allow you to participate in interactive features of our Website
            and App when you choose to do so
          </li>
          <li>To provide customer support</li>
          <li>
            To gather analysis or valuable information so that we can improve
            our Website and App
          </li>
          <li>To monitor the usage of our Website and App</li>
          <li>To detect, prevent and address technical issues</li>
          <li>
            To personalize your experience and to deliver content and product
            offerings relevant to your interests, including targeted offers and
            ads
          </li>
        </ul>
      </Typography>

      <Typography variant="p" fontWeight={"500"} fontSize={"23px"}>
        Disclosure of Information
      </Typography>

      <Typography variant="p" fontSize={"18px"} lineHeight={"1.7"} paragraph>
        We may disclose your personal information in the good faith belief that
        such action is necessary to:
      </Typography>

      <Typography variant="p" fontSize={"18px"} lineHeight={"1.7"} paragraph>
        <ul>
          <li>Comply with a legal obligation</li>
          <li>Protect and defend the rights or property of My welth help solution</li>
          <li>
            Prevent or investigate possible wrongdoing in connection with our
            Website and App
          </li>
          <li>
            Protect the personal safety of users of our Website and App or the
            public
          </li>
          <li>
            To gather analysis or valuable information so that we can improve
            Protect against legal liability
          </li>
        </ul>
      </Typography>

      <Typography variant="p" fontWeight={"500"} fontSize={"23px"}>
        Security
      </Typography>

      <Typography variant="p" fontSize={"18px"} lineHeight={"1.7"} paragraph>
        The security of your personal information is important to us, but
        remember that no method of transmission over the Internet, or method of
        electronic storage, is 100% secure. While we strive to use commercially
        acceptable means to protect your personal information, we cannot
        guarantee its absolute security.
      </Typography>

      <Typography variant="p" fontWeight={"500"} fontSize={"23px"}>
        Changes to This Privacy Policy
      </Typography>

      <Typography variant="p" fontSize={"18px"} lineHeight={"1.7"} paragraph>
        We may update our Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on this page. You are
        advised to review this Privacy Policy periodically for any changes.
        Changes to this Privacy Policy are effective when they are posted on
        this page.
      </Typography>

      <Typography variant="p" fontWeight={"500"} fontSize={"23px"}>
        Contact Us
      </Typography>

      <Typography variant="p" fontSize={"18px"} lineHeight={"1.7"} paragraph>
        If you have any questions about this Privacy Policy, please contact us
      </Typography>

      <Typography>
        By email:
        <Link href="mailto:support@mywelthhelpsolution.in" target={"_blank"}> support@My welth help solution.in </Link>
      </Typography>
      <Typography variant="p" fontSize={"18px"} lineHeight={"1.7"} paragraph>
        By visiting our website:{" "}
        <Link href="https://www.mywelthhelpsolution.in" target={"_blank"}>www.Mywelthhelpsolution.in</Link>
      </Typography>

      <Typography variant="p" fontWeight={"500"} fontSize={"23px"}>
        Acknowledgment
      </Typography>

      <Typography variant="p" fontSize={"18px"} lineHeight={"1.7"} paragraph>
        By using the My welth help solution Website and App, you acknowledge that you have
        read and understood these Terms and agree to be bound by them.
      </Typography>
    </Box>
  );
};

export default PrivacyPolicy;
