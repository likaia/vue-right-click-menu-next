<template>
  <!--右键菜单-->
  <div
    id="rightMenuDom"
    class="right-menu"
    :style="{
      display: rightMenuStatus,
      top: rightMenuTop,
      left: rightMenuLeft
    }"
  >
    <ul>
      <!--分为2组渲染-->
      <li>
        <div v-for="item in rightMenuList" :key="item.id" v-show="item.id <= 3">
          <!--status为true时, 代表禁用-->
          <span v-if="item.text?.status === true" class="disable"
            >{{ item.text.content }}
          </span>
          <!--status为false时, 参数为对象, 取content中的值-->
          <span
            v-else-if="item.text?.status === false"
            @click="item.handler(item?.parameter)"
          >
            {{ item.text.content }}
          </span>
          <span v-else @click="item.handler(item?.parameter)"
            >{{ item.text }}
          </span>
        </div>
      </li>
      <li>
        <div v-for="item in rightMenuList" :key="item.id" v-show="item.id > 3">
          <!--status为true时, 代表禁用-->
          <span v-if="item.text?.status === true" class="disable"
            >{{ item.text.content }}
          </span>
          <!--status为false时, 参数为对象, 取content中的值-->
          <span
            v-else-if="item.text?.status === false"
            @click="item.handler(item?.parameter)"
          >
            {{ item.text.content }}
          </span>
          <span v-else @click="item.handler(item?.parameter)"
            >{{ item.text }}
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "right-menu",
  props: {
    rightMenuStatus: String,
    rightMenuTop: String,
    rightMenuLeft: String,
    rightMenuList: Array
  }
});
</script>

<style scoped lang="scss">
// 右键菜单样式
.right-menu {
  position: fixed;
  left: 0;
  top: 0;
  width: 166px;
  height: auto;
  background-color: rgb(242, 242, 242);
  border: solid 1px #c2c1c2;
  box-shadow: 0 10px 10px #c2c1c2;
  display: none;
  border-radius: 5px;

  ul {
    padding: 0;
    margin: 0;
    font-size: 15px;

    li {
      list-style: none;
      box-sizing: border-box;
      padding: 6px 0;
      border-bottom: 1px solid rgb(216, 216, 217);

      &:nth-child(1) {
        padding-top: 2px;
      }

      &:nth-last-child(1) {
        border-bottom: none;
      }

      div {
        height: 25px;
        span {
          display: block;
          height: 100%;
          line-height: 25px;
          padding-left: 16px;

          &:hover {
            background-color: #0070f5;
            cursor: pointer;
            color: #ffffff;
          }
        }

        // 禁止点击样式
        .disable {
          color: #666666;

          &:hover {
            cursor: not-allowed;
            background-color: #f2f2f2;
            color: #666666;
          }
        }
      }
    }
  }
}
</style>
