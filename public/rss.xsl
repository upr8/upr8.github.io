<?xml version="1.0" encoding="utf-8"?>
<!--
  RSS Feed Stylesheet
  Based on pretty-feed-v3 from aboutfeeds.com
  Customized for asaiyan.com
-->
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title><xsl:value-of select="/rss/channel/title"/> - RSS Feed</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        <style type="text/css">
          * { box-sizing: border-box; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            font-size: 16px;
            line-height: 1.6;
            color: #24292e;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem 1rem;
          }
          .header {
            background: linear-gradient(135deg, #bfdbfe 0%, #93c5fd 100%);
            padding: 2rem;
            border-radius: 8px;
            margin-bottom: 2rem;
          }
          .header h1 {
            margin: 0 0 0.5rem 0;
            font-size: 1.75rem;
            color: #1e3a5f;
          }
          .header p {
            margin: 0;
            color: #374151;
          }
          .info-box {
            background: #fff;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            padding: 1.5rem;
            margin-bottom: 2rem;
          }
          .info-box h2 {
            margin: 0 0 0.5rem 0;
            font-size: 1.1rem;
            color: #374151;
          }
          .info-box p {
            margin: 0;
            color: #6b7280;
            font-size: 0.9rem;
          }
          .info-box code {
            background: #f3f4f6;
            padding: 0.2rem 0.4rem;
            border-radius: 4px;
            font-size: 0.85rem;
            word-break: break-all;
          }
          .feed-items {
            background: #fff;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            overflow: hidden;
          }
          .feed-items h2 {
            margin: 0;
            padding: 1rem 1.5rem;
            font-size: 1.1rem;
            background: #f9fafb;
            border-bottom: 1px solid #e5e7eb;
          }
          .item {
            padding: 1rem 1.5rem;
            border-bottom: 1px solid #e5e7eb;
          }
          .item:last-child {
            border-bottom: none;
          }
          .item:hover {
            background: #f9fafb;
          }
          .item h3 {
            margin: 0 0 0.25rem 0;
            font-size: 1rem;
          }
          .item h3 a {
            color: #0366d6;
            text-decoration: none;
          }
          .item h3 a:hover {
            text-decoration: underline;
          }
          .item .meta {
            font-size: 0.85rem;
            color: #6b7280;
            margin-bottom: 0.5rem;
          }
          .item .description {
            font-size: 0.9rem;
            color: #4b5563;
            margin: 0;
          }
          a {
            color: #0366d6;
          }
          @media (max-width: 600px) {
            .container {
              padding: 1rem;
            }
            .header {
              padding: 1.5rem;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>
              <xsl:value-of select="/rss/channel/title"/>
            </h1>
            <p>
              <xsl:value-of select="/rss/channel/description"/>
            </p>
          </div>

          <div class="info-box">
            <h2>What is an RSS feed?</h2>
            <p>
              RSS (Really Simple Syndication) is a way to subscribe to updates from websites.
              Copy this URL into your favorite feed reader to get notified when new content is published:
            </p>
            <p style="margin-top: 0.75rem;">
              <code><xsl:value-of select="/rss/channel/atom:link[@rel='self']/@href"/></code>
            </p>
          </div>

          <div class="feed-items">
            <h2>Recent Items</h2>
            <xsl:for-each select="/rss/channel/item">
              <div class="item">
                <h3>
                  <a>
                    <xsl:attribute name="href">
                      <xsl:value-of select="link"/>
                    </xsl:attribute>
                    <xsl:value-of select="title"/>
                  </a>
                </h3>
                <div class="meta">
                  <xsl:value-of select="substring(pubDate, 1, 16)"/>
                </div>
                <xsl:if test="description">
                  <p class="description">
                    <xsl:value-of select="description"/>
                  </p>
                </xsl:if>
              </div>
            </xsl:for-each>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
