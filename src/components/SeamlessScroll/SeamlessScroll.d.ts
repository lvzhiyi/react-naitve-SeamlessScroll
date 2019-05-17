interface compProps{
    /**
     * @param direction 滚动方向
     */
    direction: string

    /**
     * @param time 完成一轮滚动所需时间
     */
    scrolltime?: number 

    /**
     * @param meter 误差调节
     */
    meter?: number 

    /**
     * @param styles 误差调节
     */
    styles?: Object
}

interface compState{
    newChildren: React.ReactElement
}