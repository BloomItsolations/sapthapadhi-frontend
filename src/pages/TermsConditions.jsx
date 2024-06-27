import React from "react";
import { Box, Typography, Link } from "@mui/material";

const TermsConditions = () => {
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
        Terms and Conditions
      </Typography>

      <Typography variant="p" fontWeight={"400"} fontSize={"21px"} paragraph>
        Certainly, below are the amended sections with the requested inclusions:
      </Typography>

      <Typography variant="p" fontWeight={"500"} fontSize={"23px"}>
        Accounts
      </Typography>

      <Typography variant="p" fontSize={"18px"} lineHeight={"1.7"} paragraph>
        1. When you create an account with us, you must provide accurate and
        complete information. You are solely responsible for maintaining the
        confidentiality of your account and password and for restricting access
        to your account. You agree to accept responsibility for all activities
        that occur under your account.
      </Typography>

      <Typography variant="p" fontWeight={"500"} fontSize={"23px"}>
        User Content
      </Typography>

      <Typography variant="p" fontSize={"18px"} lineHeight={"1.7"} paragraph>
        2. Our Website and App may allow you to post, link, store, share, and
        otherwise make available certain information, text, graphics, videos, or
        other material ("User Content"). You are responsible for the User
        Content that you post on or through our Website and App, including its
        legality, reliability, and appropriateness.
      </Typography>
      <Typography variant="p" fontWeight={"500"} fontSize={"23px"}>
        Intellectual Property
      </Typography>

      <Typography variant="p" fontSize={"18px"} lineHeight={"1.7"} paragraph>
        3. The Website and App and its original content, features, and
        functionality are owned by sapthapadhi and are protected by
        international copyright, trademark, patent, trade secret, and other
        intellectual property or proprietary rights laws.
      </Typography>
      <Typography variant="p" fontWeight={"500"} fontSize={"23px"}>
        Limitation of Liability
      </Typography>

      <Typography variant="p" fontSize={"18px"} lineHeight={"1.7"} paragraph>
        4. In no event shall sapthapadhi, nor its directors, employees,
        partners, agents, suppliers, or affiliates, be liable for any indirect,
        incidental, special, consequential, or punitive damages, including
        without limitation, loss of profits, data, use, goodwill, or other
        intangible losses, resulting from (i) your access to or use of or
        inability to access or use our Website and App; (ii) any conduct or
        content of any third party on the Website and App; (iii) any content
        obtained from the Website and App; and (iv) unauthorized access, use, or
        alteration of your transmissions or content, whether based on warranty,
        contract, tort (including negligence), or any other legal theory,
        whether or not we have been informed of the possibility of such damage,
        and even if a remedy set forth herein is found to have failed of its
        essential purpose.
      </Typography>
      <Typography variant="p" fontWeight={"500"} fontSize={"23px"}>
        Governing Law and Jurisdiction
      </Typography>

      <Typography variant="p" fontSize={"18px"} lineHeight={"1.7"} paragraph>
        5. These Terms shall be governed and construed in accordance with the
        laws of India. Any dispute arising under these Terms shall be subject to
        the exclusive jurisdiction of the courts in [insert city], India.
      </Typography>
      <Typography variant="p" fontWeight={"500"} fontSize={"23px"}>
        Contact Us
      </Typography>

      <Typography variant="p" fontSize={"18px"} lineHeight={"1.7"} paragraph>
        If you have any questions about these Terms, please contact us:
      </Typography>
      <Typography variant="p" fontSize={"18px"} lineHeight={"1.7"} paragraph>
        By email:{" "}
        <Link href="mailto:support@mywelthhelpsolution.in" target={"_blank"}>
          support@sapthapadhi.in
        </Link>
      </Typography>

      <Typography variant="p" fontSize={"18px"} lineHeight={"1.7"} paragraph>
        By visiting our website:{" "}
        <Link href="www.mywelthhelpsolution.in" target={"_blank"}>
          www.sapthapadhi.in
        </Link>
      </Typography>

      <Typography variant="p" fontWeight={"500"} fontSize={"23px"}>
        Acknowledgment
      </Typography>

      <Typography variant="p" fontSize={"18px"} lineHeight={"1.7"} paragraph>
        By using the sapthapadhi Website and App, you acknowledge that you have
        read and understood these Terms and agree to be bound by them.
      </Typography>
    </Box>
  );
};

export default TermsConditions;
