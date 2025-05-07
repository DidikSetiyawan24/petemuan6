import { View, Text, FlatList, StyleSheet } from "react-native";

export default function list() {
    const data = [
        {nama: "john", age: 30, city:"new York"},
        {nama: "jane", age: 25, city:"los angels"},
        {nama: "mike", age: 35, city:"chicago"},
        {nama: "sara", age: 28, city:"houston"},
        {nama: "tom", age: 40, city:"phonix"},
        {nama: "emma", age: 22, city:"philadelphina"},
    ];
    type DataItem = { nama: string; age: number; city: string};
    const renderItem = ({item}: {item: DataItem}) => {
        return (
            <View style={styles.item}>
                <Text style={styles.text}>{item.nama}</Text>
                <Text style={styles.text}>{item.age}</Text>
                <Text style={styles.text}>{item.city}</Text>
            </View>
        );
    };
    return (
        <View style={styles.container}>
            <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.nama}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    text: {
        fontSize: 18,
    },
});
