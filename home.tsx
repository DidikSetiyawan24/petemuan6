import {View, Text, Button } from "react-native";


export default function home() {
    return (
        <View>
            <Text>Home</Text>
            <button
                title="go to page 1"
                onProgress={() =>{
                    "/page1";
                }}
            />
        </View>
    );
}
