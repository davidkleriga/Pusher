require 'nokogiri'

module Parser
    class Document
        def initialize( data )
            puts 'here'
            puts data
            @doc = Nokogiri::XML data
        end

        def node( name )
            result = @doc.xpath "#{name}"
            result.length == 1 ? result.first : result
        end

        def node_value(name)
            node = node(name)
            return node.nil? ? '' : node.text
        end
    end
end

class GnipXml
    def entry(data)
        doc = Parser::Document.new data
        {
            author: doc.node_value('author'),
            content: doc.node_value('content'),
            title: doc.node_value('title'),
            date: doc.node_value('created'),
            uri: doc.node_value('uri')
        }
    end
end