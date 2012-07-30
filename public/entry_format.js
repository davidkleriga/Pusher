var formats = {
    Twitter: function(data){
     return {
            id: data.id,
            published: data.published,
            title: data.title,
            link: data.link['@'].href,
            content: data.summary['#'],
            author: { 
                name: data.author.name,
                url: data.author.uri
            }
        };
    },
    Facebook: function(data){
        var activity_obj = data['activity:object'];
         return {
                id: data.id,
                published: data.published,
                title: data.title,
                link: data.link['@'].href,
                content: activity_obj.content + " " + activity_obj.subtitle,
                author: { 
                    name: data.author.name,
                    url: data.author.uri
                }
            };
    },
    Default: function(data){
         return {
            id: data.id,
            published: data.published,
            title: data.title,
            link: data.link['@'].href,
            content: data.summary['#'],
            author: { 
                name: data.author.name,
                url: data.author.uri
            }
    };
    }
} 

exports.for = function(id, data){
    switch (id){
        case 1:
            return formats.Twitter(data);
            break;
        case 2:
            return formats.Facebook(data);
        default:
            return formats.Default(data);
    }
}