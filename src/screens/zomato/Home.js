import { View, Text, ScrollView, TextInput, StyleSheet, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React from 'react'

export default function Home() {
    return (
        <>
            <View style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingHorizontal: 10, backgroundColor: "white" }}>
                <View style={{height: 60, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 10}}>
                    <View><FontAwesome5 name={'home'} size={25} color="red"/></View>
                    <View style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start"}}>
                        <Text style={{fontWeight: "700", color: "black", fontSize: 18}}>Home</Text>
                        <Text style={{fontWeight: "600", color: "gray", fontSize: 13}}>Lane No. 1, Chaitanya Park, Ni...</Text>
                    </View>
                    <View style={styles.tabSlices}><Text style={{color: "black", fontWeight: 700}}><FontAwesome5 name={'globe'} size={15} color="black"/> English</Text></View>
                    <View><FontAwesome5 name={'user'} size={25} color="red"/></View>
                </View>
                <View style={{height: 60, width: "100%" }}>
                    <View style={{backgroundColor: "#ececec", borderWidth: 1, borderColor: "#c3c3c3", borderRadius: 10, width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 15}}>
                        <FontAwesome5 name={'search'} size={20} color="red"/>
                        <TextInput style={{borderRightWidth: 1, borderColor: "gray", width: "75%", height: "80%"}}></TextInput>
                        <FontAwesome5 name={'microphone'} size={20} color="red"/>
                    </View>
                </View>
                <View style={{width: "100%", height: 50, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", overflow: "scroll"}}>
                    <ScrollView horizontal={true} fadingEdgeLength={90} showsHorizontalScrollIndicator={false}>
                        <View style={styles.tabSlices}><Text style={{color: "black", fontWeight: 700}}>Fast Delivery</Text></View>
                        <View style={styles.tabSlices}><Text style={{color: "black", fontWeight: 700}}>Great Offers</Text></View>
                        <View style={styles.tabSlices}><Text style={{color: "black", fontWeight: 700}}>Rating 4.0+</Text></View>
                        <View style={styles.tabSlices}><Text style={{color: "black", fontWeight: 700}}>New Arrivals</Text></View>
                        <View style={styles.tabSlices}><Text style={{color: "black", fontWeight: 700}}>Pure veg</Text></View>
                        <View style={styles.tabSlices}><Text style={{color: "black", fontWeight: 700}}>Cuisines</Text></View>
                        <View style={styles.tabSlices}><Text style={{color: "black", fontWeight: 700}}>More ▾</Text></View>
                    </ScrollView>
                </View>
            </View>
            <ScrollView style={{ height: 900, paddingTop: 20}}>
                <View style={{marginHorizontal: 10, backgroundColor: "black", height: 120, width: "90%", alignSelf: "center", borderRadius: 20, padding: 20, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 40}}>
                    <View>
                        <Text style={{fontWeight: "500", color: "white", fontSize: 15}}>Introducing</Text>
                        <Text style={{fontWeight: "800", color: "white", fontSize: 20, marginBottom: 10}}>Zomato Gold</Text>
                        <Text style={{fontWeight: "500", color: "white", fontSize: 15}}>You are invited! Join now </Text>
                    </View>
                    <Image source={require("../../assets/gold.png")} style={{width: 100, height: 100}}></Image>
                </View>
                <View style={{marginHorizontal: 10, marginVertical: 20, alignSelf: "center", height: 100, width: "90%" }}>
                        <Text style={{fontWeight: "800", color: "black", fontSize: 20, marginBottom: 10}}>Zomato Gold</Text>
                        <ScrollView horizontal={true} fadingEdgeLength={90} showsHorizontalScrollIndicator={false}>
                            <View style={{display: "flex", flexDirection: "column"}}>
                                <View style={{border: 2, height: 80 }}>
                                    <Image source={require("../../assets/R1.jpg")} style={{width: 70, height: 70, borderRadius: 10}}></Image>
                                </View>
                            </View>
                        </ScrollView>
                </View>
                {/* <View style={{ height: 100, width: "100%", borderWidth: 2, borderColor: "red" }}></View>
                <View style={{ height: 100, width: "100%", borderWidth: 2, borderColor: "red" }}></View>
                <View style={{ height: 100, width: "100%", borderWidth: 2, borderColor: "red" }}></View>
                <View style={{ height: 100, width: "100%", borderWidth: 2, borderColor: "red" }}></View>
                <View style={{ height: 100, width: "100%", borderWidth: 2, borderColor: "red" }}></View>
                <View style={{ height: 100, width: "100%", borderWidth: 2, borderColor: "red" }}></View>
                <View style={{ height: 100, width: "100%", borderWidth: 2, borderColor: "red" }}></View>
                <View style={{ height: 100, width: "100%", borderWidth: 2, borderColor: "red" }}></View>
                <View style={{ height: 100, width: "100%", borderWidth: 2, borderColor: "red" }}></View>
                <View style={{ height: 100, width: "100%", borderWidth: 2, borderColor: "red" }}></View>
                <View style={{ height: 100, width: "100%", borderWidth: 2, borderColor: "red" }}></View> */}
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    tabSlices: {
        borderWidth: 1,
        borderColor: "#c3c3c3",
        height: 35,
        borderRadius: 8,
        paddingHorizontal: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 5,
        backgroundColor: "white",
        elevation: 3
    }
})