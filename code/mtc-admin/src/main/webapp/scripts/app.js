// 调用正则表达式
function check( reg, str )
{
    if( reg.test( str ) )
    {
        return true;
    }

    return false;
}

//手机号
function isMobile(str)
{
    var regMobile = /^\d{11}$/;

    return check(regMobile, str);
}

function confirmDelete(obj) {
    var msg = "Are you sure you want to delete this " + obj + "?";
    ans = confirm(msg);
    return ans;
}

// 18n version of confirmDelete. Message must be already built.
function confirmMessage(obj) {
    var msg = "" + obj;
    ans = confirm(msg);
    return ans;
}

// Show the document's title on the status bar
window.defaultStatus=document.title;

//////////////////////////////////////////////////////////////////////////////
//功能说明： 去除字符床中的空格 用户法类似java中String对象的trim方法
//////////////////////////////////////////////////////////////////////////////
String.prototype.Trim = function() {
	return this.replace(/(^\s*)|(\s*$)/g, "");
}
