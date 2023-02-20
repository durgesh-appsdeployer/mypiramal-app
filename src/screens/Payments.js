import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

export default function Payments() {
  return (
    <View style={{ flex: 1, flexDirection: "column", alignItems: "center" }}>
      <View style={{ backgroundColor: "#003747", width: "100%", height: 100, display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingLeft: 20, paddingBottom: 20 }}>
        <Text style={{ color: "white", fontSize: 27, fontWeight: 800 }}>My Payments</Text>
      </View>
      <View style={{ padding: 10, width: "100%" }}>
        <TouchableOpacity title="Upload File" style={{ height: 50, width: "30%", backgroundColor: "red", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", borderRadius: 10, elevation: 20 }}>
          <Text style={{ color: "white", fontSize: 15 }}>Next</Text>
        </TouchableOpacity>
      </View>
      <View style={{ width: "90%", backgroundColor: "#dfdfdf", height: 250, borderRadius: 7, padding: 20, marginBottom: 10 }}>
        <View style={{ marginBottom: 10, display: "flex", flexDirection: "row" }}>
          <View style={{ display: "flex", flexDirection: "column", height: "70%", width: "50%" }}>
            <Text style={{ color: "black", fontSize: 15, marginBottom: 10 }}>2020-01-28</Text>
            <Text style={{ color: "black", fontSize: 14, marginBottom: 20 }}>Receipt No.</Text>
            <Text style={{ color: "black", fontSize: 14 }}>Type</Text>
            <Text style={{ color: "black", fontSize: 14 }}>Drawn On</Text>
            <Text style={{ color: "black", fontSize: 14 }}>Branch Name</Text>
            <Text style={{ color: "black", fontSize: 14 }}>Instrument Date</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", height: "70%", width: "50%" }}>
            <Text style={{ color: "black", fontSize: 15, fontWeight: 900, marginBottom: 10 }}>₹ 10,00,000.00</Text>
            <Text style={{ color: "black", fontSize: 14, marginBottom: 20 }}>RECP20491</Text>
            <Text style={{ color: "black", fontSize: 14 }}>Advance</Text>
            <Text style={{ color: "black", fontSize: 14 }}>2020-01-28</Text>
            <Text style={{ color: "black", fontSize: 14 }}>ICICI Bank</Text>
            <Text style={{ color: "black", fontSize: 14 }}>2020-01-28</Text>
          </View>
        </View>
        <TouchableOpacity title="Upload File" style={{ height: 50, width: "100%", backgroundColor: "red", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", borderRadius: 50, elevation: 20 }}>
          <Text style={{ color: "white", fontSize: 15 }}>Download</Text>
        </TouchableOpacity>
      </View>

      <View style={{ width: "90%", backgroundColor: "#dfdfdf", height: 60, borderRadius: 7, padding: 20, marginVertical: 10 }}>
        <View style={{ marginBottom: 0, display: "flex", flexDirection: "row" }}>
          <View style={{ display: "flex", flexDirection: "column", width: "50%" }}>
            <Text style={{ color: "black", fontSize: 15 }}>2020-01-28</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", width: "50%" }}>
            <Text style={{ color: "black", fontSize: 15, fontWeight: 900 }}>₹ 10,00,000.00</Text>
          </View>
        </View>
      </View>

      <View style={{ width: "90%", backgroundColor: "#dfdfdf", height: 60, borderRadius: 7, padding: 20, marginVertical: 10 }}>
        <View style={{ marginBottom: 0, display: "flex", flexDirection: "row" }}>
          <View style={{ display: "flex", flexDirection: "column", width: "50%" }}>
            <Text style={{ color: "black", fontSize: 15 }}>2020-01-28</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", width: "50%" }}>
            <Text style={{ color: "black", fontSize: 15, fontWeight: 900 }}>₹ 10,00,000.00</Text>
          </View>
        </View>
      </View>

      <View style={{ width: "90%", backgroundColor: "#dfdfdf", height: 60, borderRadius: 7, padding: 20, marginVertical: 10 }}>
        <View style={{ marginBottom: 0, display: "flex", flexDirection: "row" }}>
          <View style={{ display: "flex", flexDirection: "column", width: "50%" }}>
            <Text style={{ color: "black", fontSize: 15 }}>2020-01-28</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", width: "50%" }}>
            <Text style={{ color: "black", fontSize: 15, fontWeight: 900 }}>₹ 10,00,000.00</Text>
          </View>
        </View>
      </View>

      <View style={{ width: "90%", backgroundColor: "#dfdfdf", height: 60, borderRadius: 7, padding: 20, marginVertical: 10 }}>
        <View style={{ marginBottom: 0, display: "flex", flexDirection: "row" }}>
          <View style={{ display: "flex", flexDirection: "column", width: "50%" }}>
            <Text style={{ color: "black", fontSize: 15 }}>2020-01-28</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", width: "50%" }}>
            <Text style={{ color: "black", fontSize: 15, fontWeight: 900 }}>₹ 10,00,000.00</Text>
          </View>
        </View>
      </View>

      <View style={{ width: "90%", backgroundColor: "#dfdfdf", height: 60, borderRadius: 7, padding: 20, marginVertical: 10 }}>
        <View style={{ marginBottom: 0, display: "flex", flexDirection: "row" }}>
          <View style={{ display: "flex", flexDirection: "column", width: "50%" }}>
            <Text style={{ color: "black", fontSize: 15 }}>2020-01-28</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", width: "50%" }}>
            <Text style={{ color: "black", fontSize: 15, fontWeight: 900 }}>₹ 10,00,000.00</Text>
          </View>
        </View>
      </View>

      <View style={{ width: "90%", backgroundColor: "#dfdfdf", height: 60, borderRadius: 7, padding: 20, marginVertical: 10 }}>
        <View style={{ marginBottom: 0, display: "flex", flexDirection: "row" }}>
          <View style={{ display: "flex", flexDirection: "column", width: "50%" }}>
            <Text style={{ color: "black", fontSize: 15 }}>2020-01-28</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", width: "50%" }}>
            <Text style={{ color: "black", fontSize: 15, fontWeight: 900 }}>₹ 10,00,000.00</Text>
          </View>
        </View>
      </View>

    </View>
  )
}
