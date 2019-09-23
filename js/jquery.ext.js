(function ($) {
    /**
     * 将表单序列化成json字符串
     * @returns {{}}
     */
    $.fn.serializeJson = function () {
        var serializeObj = {};
        var array = this.serializeArray();
        var str = this.serialize();
        $(array).each(function () {
            if (serializeObj[this.name]) {
                if ($.isArray(serializeObj[this.name])) {
                    serializeObj[this.name].push(this.value);
                } else {
                    serializeObj[this.name] = [serializeObj[this.name], this.value];
                }
            } else {
                serializeObj[this.name] = this.value;
            }
        });
        return serializeObj;
    };

    $.fn.serializeOther = function(){
        var serialized = $(this).serialize();
        if (!serialized) // not a form
            serialized = $(this).
                find('input[name],select[name],textarea[name]').serialize();
        return serialized;
    }
})(jQuery);