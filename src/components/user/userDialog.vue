<template>
    <div class="userDialog" style="overflow:hidden;">
        <el-dialog
                width="30%"
                :title="editData.id ? '编辑用户' : '添加用户'"
                :label-width="formLabelWidth"
                :visible="dialogFormVisible"
                ref="ruleForm"
                :append-to-body="true"
                @close="closeDialog"
                @open="openDialog"
        >
            <el-form :model="formData" :rules="rules" ref="ruleForm">
                <el-form-item
                        prop="username"
                        label="用户名"
                        :label-width="formLabelWidth"
                >
                    <el-input
                            :disabled="!!editData.id"
                            v-model="formData.username"
                            autocomplete="off"
                    ></el-input>
                </el-form-item>

                <el-form-item
                        v-if="!editData.id"
                        prop="password"
                        label="密码"
                        :label-width="formLabelWidth"
                >
                    <el-input v-model="formData.password" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item prop="email" label="邮箱" :label-width="formLabelWidth">
                    <el-input v-model="formData.email" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item prop="mobile" label="手机" :label-width="formLabelWidth">
                    <el-input v-model="formData.mobile" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <!--<el-button @click="dialogFormVisible = false">取 消</el-button>-->
                <el-button type="primary" @click="submit">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import {mapState, mapMutations, mapActions} from 'vuex'

    export default {
        name: 'userDialog',
        data: () => {
            return {
                formLabelWidth: '70px',
                formData: {
                    password: '',
                    username: '',
                    email: '',
                    mobile: ''
                },
                dialogFormVisibleV: false,
                rules: {
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                        {min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur'}
                    ],
                    email: [
                        {required: true, message: '请输入邮箱', trigger: 'blur'},
                        {
                            pattern: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/,
                            message: '长度在 3 到 15 个字符',
                            trigger: 'blur'
                        }
                    ],
                    mobile: [
                        {required: true, message: '请输入电话', trigger: 'blur'},
                        {
                            pattern: /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/,
                            message: '长度在 3 到 15 个字符',
                            trigger: 'blur'
                        }
                    ]
                }
            }
        },
        computed: {
            ...mapState('users', ['editData', 'dialogFormVisible'])
        },
        methods: {
            ...mapMutations('users', ['changeEditData', 'changeUserDialogVisible']),
            ...mapActions('users', ['ActCreatedUser', 'getUserList', 'ActEditUser']),
            closeDialog() {
                this.changeUserDialogVisible(false)
                setTimeout(() => {
                    this.$refs.ruleForm.resetFields()
                    this.changeEditData({})
                }, 500)
            },
            openDialog() {
                this.formData.username = this.editData.username
                this.formData.email = this.editData.email
                this.formData.mobile = this.editData.mobile
            },
            submit() {
                if (this.editData.id) {
                    this.vewEditUser()
                    return
                }
                this.formSubmit()
            },
            //添加用户确定对应请求
            formSubmit() {
                const {username, password, email, mobile} = this.formData
                this.$refs.ruleForm.validate(valid => {
                    if (valid) {
                        this.ActCreatedUser({username, password, email, mobile})
                            .then(re => {
                                if (re.meta.status === 201) {
                                    this.$message.success(re.meta.msg)
                                    this.changeUserDialog(false)
                                    this.getUserList({pagenum: 1, pagesize: 10})
                                } else {
                                    // this.changeUserDialog(false)
                                    this.$message.success(re.meta.msg)
                                }
                            })
                            .catch(error => {
                                // console.log('error', error)
                            })
                    }
                })
            },
            //编辑用户确定对应请求
            vewEditUser() {
                const {email, mobile} = this.formData
                this.$refs.ruleForm.validate(valid => {
                    if (valid) {
                        this.ActEditUser({id: this.editData.id, email, mobile})
                            .then(re => {
                                if (re.meta.status === 200) {
                                    this.$message.success(re.meta.msg)
                                    this.changeUserDialogVisible(false)
                                    this.getUserList({pagenum: 1, pagesize: 10})
                                } else {
                                    // this.changeUserDialog(false)
                                    this.$message.success(re.meta.msg)
                                }
                            })
                            .catch(error => {
                                    // console.log('error', error)
                                }
                            )
                    }
                })
            }
        }
    }
</script>

<style scoped></style>
