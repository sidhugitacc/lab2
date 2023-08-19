from lxml import etree

# Load the XML and XSD files
xml_file = "xml files\sample.xml"
xsd_file = "xml files\sample.xsd"

# Load XML and XSD documents
xml_doc = etree.parse(xml_file)
xsd_doc = etree.parse(xsd_file)

# Create a schema from the XSD document
schema = etree.XMLSchema(xsd_doc)

# Validate the XML against the schema
if schema.validate(xml_doc):
    print("XML is valid.")
else:
    print("XML is not valid.")
    print(schema.error_log)
