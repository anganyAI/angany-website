---
slug: /api/angany-app-data
title: "Angany App Data API"
sidebar_position: 3
---

# Angany App Data API

The Angany App Data API provides comprehensive access to call data, analytics, and performance metrics from your Angany platform. This API enables you to extract insights, monitor system performance, and analyze communication patterns.

## Quick Links

- [API Documentation Overview](/docs/api/angany-app-data/angany-app-data)

## Core Features

### Dashboard & Analytics
Get comprehensive overview and summary data:
- [Get Dashboard Summary](/docs/api/angany-app-data/get-dashboard-summary-api-v-1-dashboard-summary-get)
- [List Call Details](/docs/api/angany-app-data/list-call-details-api-v-1-dashboard-call-details-get)

### Call Data Access
Access detailed information about calls and their metadata:
- [List Calls](/docs/api/angany-app-data/list-calls-api-v-1-calls-call-ids-get)

### Call-Specific Data
For individual calls, access detailed logs and analysis:
- [List Call Logs](/docs/api/angany-app-data/list-logs-api-v-1-calls-call-id-logs-get)
- [List Transcriptions](/docs/api/angany-app-data/list-transcriptions-api-v-1-calls-call-id-transcriptions-get)
- [List Performance Events](/docs/api/angany-app-data/list-performance-events-api-v-1-calls-call-id-performance-events-get)
- [Calculate Component Times](/docs/api/angany-app-data/calculate-component-times-api-v-1-calls-call-id-performance-events-calculation-get)

### Performance Analytics
Deep dive into system performance and component analysis:
- Component timing analysis and performance metrics
- AI processing time breakdowns (transcriber, synthesizer, agentic components)
- System latency and response time analysis

## Use Cases

### Business Intelligence
- Track call volumes and patterns
- Analyze conversation outcomes
- Monitor user engagement metrics
- Generate performance reports

### Technical Monitoring
- Monitor AI component performance
- Track system response times
- Identify bottlenecks and optimization opportunities
- Analyze processing latencies

### Quality Assurance
- Review call transcriptions
- Analyze conversation flows
- Monitor AI response quality
- Track error rates and patterns

## Getting Started

1. **Authentication**: Use your API key or JWT token for authentication
2. **Base URL**: `https://dev.angany.ai`  
3. **Format**: All requests and responses use JSON format
4. **Filtering**: Most endpoints support filtering by date ranges, call types, and other parameters

## Data Retention

Call data and analytics are retained according to your organization's data retention policy. Historical data may have different availability windows depending on your subscription level.

## Support

For questions about the App Data API, please refer to our [main documentation](/docs/intro) or contact our support team. 