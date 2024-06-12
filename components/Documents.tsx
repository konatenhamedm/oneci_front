"use client";
import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";
import dynamic from "next/dynamic";
///import Images from "next/image";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#FFFF",
  },
  section: {
    margin: 1,
    padding: 0,
    flexGrow: 1,
  },
});

interface DocumentsProps {
  type?: any;
}

const Documents: React.FC<DocumentsProps> = ({ type }) => {
  return (
    <>
      <PDFViewer className="w-full h-full">
        <Document>
          <Page
            size="A4"
            orientation="portrait"
            //orientation="landscape"
            style={styles.page}
            wrap={false}
          >
            <View style={styles.section}>
              {/* <Text>{type} #1</Text> */}
              <Image
                // alt="oneci"
                src={`  ${
                  type == "carte" ? "/" + type + ".jpeg" : "/" + type + ".jpg"
                }`}
              />
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </>
  );
};

export default Documents;
