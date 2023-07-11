import { useState } from "react";

const FixedSizeList = (props) => {
  const { height, width, itemSize, itemCount, children: Child } = props
  // 记录滚动掉的高度
  const [scrollOffset, setScrollOffset] = useState(0)

  // 外部容器高度
  const containerStyle = {
    position: 'relative',
    width,
    height,
    overflow: 'auto'
  }

  // 1000个元素撑起盒子的实际高度
  const contentStyle = {
    height: itemSize * itemCount,
    width: '100%'
  }

  const getCurrentChildren = () => {
    // 可视区起始索引
    const startIndex = Math.floor(scrollOffset / itemSize)
    //上缓冲区起始索引
    const cacheStartIndex = Math.max(0, startIndex - 2)
    // 可视区展示的元素的最大个数
    const numsVisible = Math.ceil(height / itemSize)
    // 下缓冲区结束索引
    const cacheEndIndex = Math.min(itemCount - 1, startIndex + numsVisible + 2)
    const items = []
    // 根据上面计算的索引值，不断添加元素给 container
    for (let i = cacheStartIndex; i < cacheEndIndex; i++) {
      const itemStyle = {
        position: 'absolute',
        height: itemSize,
        width: '100%',
        // 计算每个元素在 container 中的 top 值
        top: itemSize * i
      }
      items.push(<Child key={i} index={i} style={itemStyle} />)
    }

    return items
  }

  const scrollHandler = (event) => {
    const { scrollTop } = event.currentTarget
    setScrollOffset(scrollTop)
  }

  return (
    <div style={containerStyle} onScroll={scrollHandler}>
      <div style={contentStyle}>
        {getCurrentChildren()}
      </div>
    </div>
  )
}

export default FixedSizeList