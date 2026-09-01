import SharedButton from "@/components/form/sharedButton";
import GoLiftText from "@/components/ui/GoLiftText";
import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Animated, Pressable, StyleSheet, Text } from "react-native";

const WELCOME = "Chào mừng bạn đến với GoLift, GoLift mong rằng sẽ được đồng hành cùng bạn trên con đường tập luyện!"

export default function OnBoardingIndex(){
    const [welcomeText, setWelcomeText] = useState<string>('')
    const scale = useRef(new Animated.Value(0.5)).current;
    const opacity = useRef(new Animated.Value(0.8)).current;
    const buttonAppear = useRef(new Animated.Value(0)).current
    const [typing, setTyping] = useState<boolean>(false)

    useEffect(()=>{
        Animated.parallel([
            Animated.timing(scale, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }),
            Animated.timing(opacity,{
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            })
        ]).start(()=>{
            setTyping(true)
        });

    },[])

useEffect(() => {
        if (!typing) return;

        let index = 0;

        const interval = setInterval(() => {
            if (welcomeText === WELCOME){
                clearInterval(interval);
            }
            index++;

            setWelcomeText(
                WELCOME.slice(0, index)
            );

            if (index >= WELCOME.length) {
                clearInterval(interval);


                Animated.timing(buttonAppear, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }).start();
            }
        }, 30);
    }, [typing]);


    if (welcomeText.length === WELCOME.length){
        Animated.timing(buttonAppear, {
            toValue: 1,
            duration: 1,
            useNativeDriver: true
        }).start()
    } 

    return (
        <Pressable onPress={(e)=>{
            setWelcomeText(WELCOME)
        }} style={style.container}>
            <Animated.Image
                source={require("@/assets/images/GoLift_logo.png")}
                style={[
                    {
                        opacity,
                        transform: [{ scale}],
                    },style.onboardingLogo,
                ]}
            />
            <GoLiftText backgroundShown={true}/>
            <Text style={style.welcomeText}>{welcomeText}</Text>
            <Animated.View style={[
                {opacity: buttonAppear},
                style.buttonZone,
            ]}>
                <SharedButton isPrimaryBackground={true} onPress={(e)=>router.replace('/onboarding/themes')} title="Bắt đầu ngay"/>
            </Animated.View>
        </Pressable>
    )
}
const style = StyleSheet.create({
    container:{
        backgroundColor: '#cc471f',
        paddingTop: 100,
        alignItems: 'center',
        flex: 1,
        gap: 10,
    },
    onboardingLogo:{
        width: 150,
        height: 150,
        borderRadius: 20
    },
    welcomeText: {
        fontSize: 20,
        color: '#fff',
        marginInline: 50,
        marginTop: 30,
        textAlign: 'center',
    },
    buttonZone:{
        marginTop: 30,
        borderRadius: 10,
        backgroundColor: '#2b2b2b',
    },
})