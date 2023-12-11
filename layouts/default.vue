<template>
    <div style="margin:0px">
        <el-container>
            <el-header class="head">
                <MyHeader/>
            </el-header>
            <el-container style="min-height:100vh;" class="side">
                <el-aside width="200px" class="side-1">
                    <MySidebar class="tekito"/>
                </el-aside>
                <div class="page" style="min-width:100vh;width:100%">
                    <slot/>
                </div>
            </el-container>
        </el-container>
    </div>
</template>

<style scoped>
.head{
    /* border-radius:''; */
    /* border: 1px solid var(--el-border-color); */
    /* --el-header-border-radius: 4px; */
    border-bottom: 1px solid var(--el-border-color);
}

.page{
    border: 1px solid var(--el-border-color);
}
</style>

<style>
    .el-aside {
        background-color: aqua;
    }
    .el-menu{
        background-color: aqua;
    }
    .el-header{
        background-color: blueviolet;
    }
    .page{
        background-color: brown;
    }
</style>