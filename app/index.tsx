import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function App(): JSX.Element {
    return (
        <View className="flex-1 items-center justify-center bg-red">
            <Text className="text-3xl">My first App Mobile</Text>
            <StatusBar style="auto" />
            <Link href="/profile">Go to Home</Link>
        </View>
    );
}
