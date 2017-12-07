## 常用正则表达式

#### 匹配所有中文

> 	[\u4e00-\u9fa5]

#### 匹配双字节字符

> 	[\x00-\xff]

#### 匹配手机号

> 	/^\d{3}-\d{8}|\d{4}-\{7,8}$/
> 	/^1(3|4|5|6|7|8)d{9}$/ 
> 	/^1d{2}-d{4}-d{4}$/ 

#### 验证密码：长度为8-20位，包含字母、数字、下划线组合(这个只有字母的也可以通过）

> 	/^[a-zA-Z]([a-zA-Z]|\d|_){7,19}$/

#### 验证密码：长度为8-20位，包含字母、数字、字符任意两种及以上组合

	let pwdReg = /^\S\S{6,18}\S$/;
	let lowCase = /^\S*[a-z]\S*$/;
	let upperCase = /^\S*[A-Z]\S*$/;
	let number = /^\S*[0-9]\S*$/;
	let symbol = /[`~!@#$%^&*\(\)\_\+\-\=\[\]\\\{\}|;':",./<>?]$/;
	lowCase.test(tmp) && result ++;
	upperCase.test(tmp) && result ++;
	number.test(tmp) && result ++;
	symbol.test(tmp) && result ++;
	
	if(pwdReg.test(tmp) && result >=2){
		return true;
	}else{
		return false;
	}

#### 匹配Email




#### 匹配国内身份证
