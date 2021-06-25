<!--
* @Author: lss
* @Change: 更改者
* @Date: 年-月-日
* @Description: 上传功能
-->
<template>
  <div class="upload-wrap">
    <div class="upload-box">
      <div class="upload-header flex">
        <span>{{ title }}</span>
        <i class="el-icon-close" @click="$emit('close')"></i>
      </div>
      <div class="upload-body">
        <slot>
          <div class="upload-slot-default flex">
            <span>布局名称</span>
            <input type="text" v-model="msg"/>
          </div>
        </slot>
        <div class="upload-content flex">
          <span>{{ uploadText }}</span>
          <el-upload
            class="data-uploader"
            :action="actionUrl"
            v-bind="$attrs"
            v-on="$listeners"
            :before-upload="beforeUpload"
            :on-success="successProcess"
          >
            <div class="btn-upload">
              <i class="el-icon-upload2"></i>
              <span>上传文件</span>
            </div>
            <div slot="tip" class="el-upload__tip">
              {{ tips }}
            </div>
          </el-upload>
        </div>
      </div>
      <footer class="btn-group flex">
        <div class="btn-cancel" @click="$emit('close')">
          {{ cancelText }}
        </div>
        <div class="btn-sure" @click="$emit('sure',msg)">
          {{ sureText }}
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    title: {
      type: String,
      default: "上传布局",
    },
    cancelText: {
      type: String,
      default: "取消",
    },
    sureText: {
      type: String,
      default: "确定",
    },
    uploadText: {
      type: String,
      default: "上传文件",
    },
    actionUrl: {
      type: String,
      default: "https://jsonplaceholder.typicode.com/posts/",
    },
    tips: {
      type: String,
      default: "只支持.zip格式",
    },
  },
  data() {
    return {
      msg:""
    };
  },
  components: {},
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    successProcess(response, file, fileList) {
      this.$emit("on-success", { response, file, fileList });
    },
    beforeUpload(file) {
      this.$emit("before-upload", { file });
    },
  },
  destroyed() {},
};
</script>

<style lang="scss" scoped>
.upload-wrap {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 3;
  .upload-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    width: 400px;
    height: 250px;
    padding: 5px 10px 5px 30px;
    .upload-header {
      height: 32px;
      justify-content: space-between;
      i {
        font-size: 20px;
        cursor: pointer;
      }
    }
    .upload-slot-default {
      justify-content: flex-start;
      line-height: 32px;
      margin-bottom: 10px;
      & > span {
        display: inline-block;
        width: 75px;
        text-align: left;
      }
      input {
        width: 200px;
        height: 32px;
        padding: 8px;
        border: 1px solid #ccc;
        appearance: none;
        outline: none;
        border-radius: 4px;
      }
    }
    .upload-body {
      padding-top: 20px;
    }
    .upload-content {
      justify-content: flex-start;
      & > span {
        display: inline-block;
        width: 75px;
        text-align: left;
      }
      .data-uploader {
        width: calc(100% - 120px);
        text-align: left;
        .btn-upload {
          border: 1px solid #ccc;
          padding: 5px;
          text-align: center;
          border-radius: 4px;
        }
      }
    }
    .btn-group {
      position: absolute;
      bottom: 20px;
      height: 32px;
      justify-content: space-evenly;
      width: 80%;
      & > div {
        cursor: pointer;
        border: 1px solid #ccc;
        height: 28px;
        line-height: 28px;
        width: 60px;
        border-radius: 4px;
      }
    }
  }
}
</style>
