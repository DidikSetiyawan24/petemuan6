import { Tabs } from "expo-router";

export default function RootLayout() {
    return(
        <Tabs>
            <Tabs.Screen name="home"/>
            <Tabs.Screen name="list"/>
            <Tabs.Screen name="about"/>
        </Tabs>
    );
}
