import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const ListExample = ({ title = 'List Example', data = [] }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={data}
        scrollEnabled={false}
        keyExtractor={(item, index) => `${item}-${index}`}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListEmptyComponent={
          <Text style={styles.emptyState}>Add a few items to populate this list.</Text>
        }
        renderItem={({ item, index }) => (
          <View style={styles.itemRow}>
            <Text style={styles.itemIndex}>{index + 1}.</Text>
            <Text style={styles.item}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ListExample;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 360,
    alignSelf: 'center',
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#102542',
    gap: 14,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#ffffff',
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemIndex: {
    width: 28,
    fontSize: 16,
    fontWeight: '700',
    color: '#8fb9ff',
  },
  item: {
    flex: 1,
    fontSize: 16,
    color: '#eff5ff',
  },
  separator: {
    height: 10,
  },
  emptyState: {
    fontSize: 15,
    lineHeight: 22,
    color: '#c5d4eb',
  },
});
