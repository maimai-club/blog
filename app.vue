<template>
  <div style="padding: 20px">
    <el-button @click="onClick">test</el-button>
      <el-row>
        <el-button :icon="Search" circle />
        <el-button type="primary" :icon="Edit" circle />
        <el-button type="success" :icon="Check" circle />
        <el-button type="info" :icon="Message" circle />
        <el-button type="warning" :icon="Star" circle />
        <el-button type="danger" :icon="Delete" circle />
      </el-row>
  </div>
</template>
<script lang="ts" setup>
import { ElMessage } from 'element-plus';

import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'

const onClick = () => {
  ElMessage({ message: 'test' })
}
</script>