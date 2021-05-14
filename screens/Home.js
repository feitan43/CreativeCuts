import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";

import { icons, images, SIZES, COLORS, FONTS } from '../components'

const Home = ({ navigation }) => {

    // Dummy Datas

    const categoryData = [
        {
            id: 1,
            name: "Mens Haircut",
            icon: icons.mens,
        },
        {
            id: 2,
            name: "Shave",
            icon: icons.razor,
        },
        {
            id: 3,
            name: "Massage",
            icon: icons.massage,
        },
        

    ]

    // price rating
    const affordable = 1
    const fairPrice = 2
    const expensive = 3

    const restaurantData = [
        {
            id: 1,
            name: "Buzzcut",
            rating: 4.8,
            categories: [1],
            priceRating: fairPrice,
            photo: images.buzzcut,
            duration: "₱100.00",
            menu: [
                {
                    menuId: 1,
                    name: "Buzzcut",
                    photo: images.buzzcut,
                    description: "A buzzcut uses electric clippers to shave the hair to a consistently short length that's almost-but-not-quite bald.",
                    price: 100
                }
            ]},
        {
            id: 2,
            name: "Quiff",
            rating: 4.8,
            categories: [1],
            priceRating: fairPrice,
            photo: images.quiff,
            duration: "₱100.00",
            menu: [
                {
                    menuId: 2,
                    name: "Quiff",
                    photo: images.quiff,
                    description: "A quiff's most-prominent feature is its little mountain of hair at the front, combed upwards. Behind that, hair has been combed forward.",
                    price: 100
                },
            ]
        },
        {
            id: 3,
            name: "Pompadour",
            rating: 4.8,
            categories: [1],
            priceRating: fairPrice,
            photo: images.pompadour,
            duration: "₱100.00",
            menu: [
                {
                    menuId: 3,
                    name: "Pompadour",
                    photo: images.pompadour,
                    description: "A pompadour is very similar to a quiff, but features the hair slicked upwards and back, with a pomp at the front. Think Elvis Presley's hair.",
                    price: 100
                }
            ]
        },
        {
            id: 4,
            name: "Low Fade",
            rating: 4.8,
            categories: [1],
            priceRating: fairPrice,
            photo: images.lowfade,
            duration: "₱100.00",
            menu: [
                {
                    menuId: 4,
                    name: "Low Fade",
                    photo: images.lowfade,
                    description: "A low fade is when the hair disappears more than a few inches below the hairline.",
                    price: 100
                }
            ]
        },
        {
            id: 5,
            name: "High Fade",
            rating: 4.8,
            categories: [1],
            priceRating: fairPrice,
            photo: images.highfade,
            duration: "₱100.00",
            menu: [
                {
                    menuId: 5,
                    name: "High Fade",
                    photo: images.highfade,
                    description: " a high fade is when the hair completely disappears within a few inches of the hairline.",
                    price: 100
                }
            ]
        },
        {
            id: 6,
            name: "Mid Fade",
            rating: 4.8,
            categories: [1],
            priceRating: fairPrice,
            photo: images.midfade,
            duration: "₱100.00",
            menu: [
                {
                    menuId: 6,
                    name: "Mid Fade",
                    photo: images.midfade,
                    description: "'mid fade' is a term you can use if you want the fade to end somewhere in between a low fade and a high fade.Fresh salmon, sushi rice, fresh juicy avocado",
                    price: 100
                }
            ]
        },
        {
            id: 7,
            name: "High Top Fade",
            rating: 4.8,
            categories: [1],
            priceRating: fairPrice,
            photo: images.hightopfade,
            duration: "₱100.00",
            menu: [
                {
                    menuId: 7,
                    name: "High Top Fade",
                    photo: images.hightopfade,
                    description: "A high top fade is a special kind of fade—it incorporates a fade on each side with long-but-flat hair on the top.",
                    price: 100
                }
            ]
        },
        {
            id: 8,
            name: "Crew Cut",
            rating: 4.8,
            categories: [1],
            priceRating: fairPrice,
            photo: images.crewcut,
            duration: "₱100.00",
            menu: [
                {
                    menuId: 8,
                    name: "Crew Cut",
                    photo: images.crewcut,
                    description: "A crew cut requires electric clippers to shave the hair shorter on the sides, but the hair is left longer on top.",
                    price: 100
                }
            ]
        },
 
        {

            id: 9,
            name: "Side Part",
            rating: 4.9,
            categories: [1],
            priceRating: fairPrice,
            photo: images.sidepart,
            duration: "₱100.00",
            menu: [
                {
                    menuId: 9,
                    name: "Side Part",
                    photo: images.sidepart,
                    description: "A side part cut is when a relatively short cut is clearly parted. There's some variety regarding length on a side part that you can discuss with your barber.",
                    price: 100
                },
            ]
        },
        {
            id: 10,
            name: "Circle Beard",
            rating: 4.9,
            categories: [2],
            priceRating: affordable,
            photo: images.circlebeard,
            duration: "₱100.00",
            menu: [
                {
                    menuId: 10,
                    name: "Circle Beard",
                    photo: images.circlebeard,
                    description: "A chin patch and a mustache that forms a circle",
                    price: 50
                },
            ]
        },
        {
            id: 11,
            name: "Royal Beard",
            rating: 4.9,
            categories: [2],
            priceRating: affordable,
            photo: images.royalbeard,
            duration: "₱100.00",
            menu: [
                {
                    menuId: 11,
                    name: "Royal Beard",
                    photo: images.royalbeard,
                    description: "A mustache anchored by a chin strip",
                    price: 50
                },
            ]
        },
        {
            id: 12,
            name: "Goatee",
            rating: 4.9,
            categories: [2],
            priceRating: affordable,
            photo: images.goatee,
            duration: "₱100.00",
            menu: [
                {
                    menuId: 12,
                    name: "Goatee",
                    photo: images.goatee,
                    description: "A small beard that elongates the chin",
                    price: 50
                },
            ]
        },
        {
            id: 13,
            name: "Van Dyke Beard",
            rating: 4.9,
            categories: [2],
            priceRating: affordable,
            photo: images.vandykebeard,
            duration: "₱100.00",
            menu: [
                {
                    menuId: 13,
                    name: "Van Dyke Beard",
                    photo: images.vandykebeard,
                    description: "A full goatee with detached mustache",
                    price: 50
                },
            ]
        },
        {
            id: 14,
            name: "Head Massage",
            rating: 4.9,
            categories: [3],
            priceRating: expensive,
            photo: images.headmassage,
            duration: "FOR FREE",
            menu: [
                {
                    menuId: 14,
                    name: "Head Massage",
                    photo: images.headmassage,
                    description: "In the end of your haircut you'll have a relaxing head massage FOR FREE!",
                    price: 0
                },
            ]
        }

    ]

    const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState(restaurantData)


    function onSelectCategory(category) {
        //filter restaurant
        let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))

        setRestaurants(restaurantList)

        setSelectedCategory(category)
    }

    function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id)

        if (category.length > 0)
            return category[0].name

        return ""
    }

    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', height: 50, marginTop: 40 }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.barMenu}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 25
                        }}
                    />
                </TouchableOpacity>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View
                        style={{
                            width: '70%',
                            height: "100%",
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius
                        }}
                    >
                        <Text style={{ ...FONTS.h1 }}>SERVICES</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.notif}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderMainCategories() {
        const renderItem = ({ item }) => {
            <Text style={{ ...FONTS.largeTitle }}>...</Text>
            return (
                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding * 1,
                        backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
                        borderRadius: SIZES.radius,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: SIZES.padding,
                        ...styles.shadow
                    }}
                    onPress={() => onSelectCategory(item)}
                >
                    <View
                        style={{
                            width: 80,
                            height: 80,
                            borderRadius: 20,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray
                        }}
                    >
                        <Image
                            source={item.icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </View>

                    <Text
                        style={{
                            marginTop: SIZES.padding,
                            color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
                            ...FONTS.body5
                        }}
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ padding: SIZES.padding * 2 , alignItems: 'center'}}>
                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                />
            </View>
        )
    }

    function renderRestaurantList() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: SIZES.padding * 2 }}
                onPress={() => navigation.navigate('Barbershop', {
                    item,
       
                })}
            >
                {/* Image */}
                <View
                    style={{
                        marginBottom: SIZES.padding
                    }}
                >
                    <Image
                        source={item.photo}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: 200,
                            borderRadius: SIZES.radius
                        }}
                    />

                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            height: 35,
                            width: SIZES.width * 0.3,
                            backgroundColor: COLORS.white,
                            borderTopRightRadius: SIZES.radius,
                            borderBottomLeftRadius: SIZES.radius,
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...styles.shadow
                        }}
                    >
                        <Text style={{ ...FONTS.h4 }}>{item.duration}</Text>
                    </View>
                </View>

                {/* Restaurant Info */}
                <Text style={{ ...FONTS.body2 }}>{item.name}</Text>

                <View
                    style={{
                        marginTop: SIZES.padding,
                        flexDirection: 'row'
                    }}
                >
                    {/* Rating */}
                    <Image
                        source={icons.star}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.primary,
                            marginRight: 10
                        }}
                    />
                    <Text style={{ ...FONTS.body3 }}>{item.rating}</Text>

                    {/* Categories */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginLeft: 10
                        }}
                    >
                        {
                            item.categories.map((categoryId) => {
                                return (
                                    <View
                                        style={{ flexDirection: 'row' }}
                                        key={categoryId}
                                    >
                                        <Text style={{ ...FONTS.body3 }}>{getCategoryNameById(categoryId)}</Text>
                                        <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}> . </Text>
                                    </View>
                                )
                            })
                        }

                        {/* Price */}
                        {
                            [1, 2, 3].map((priceRating) => (
                                <Text
                                    key={priceRating}
                                    style={{
                                        ...FONTS.body3,
                                        color: (priceRating <= item.priceRating) ? COLORS.black : COLORS.darkgray
                                    }}
                                >₱</Text>
                            ))
                        }
                    </View>
                </View>
            </TouchableOpacity>
        )

        return (
            <FlatList
                data={restaurants}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderMainCategories()}
            {renderRestaurantList()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})

export default Home