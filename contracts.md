# API Contracts & Integration Plan

## Mock Data Currently Used
The frontend currently uses mock data from `/src/data/mockData.js`:
- `fraudIncidents`: Array of fraud cases with location coordinates, dates, descriptions
- `adviceBoxes`: Warning and advice content from authorities  
- `protectionSteps`: Step-by-step protection guidelines

## API Endpoints to Implement

### 1. GET /api/fraud-incidents
**Purpose**: Fetch all fraud incident cases
**Response**:
```json
{
  "incidents": [
    {
      "id": 1,
      "title": "string",
      "date": "string",
      "location": "string", 
      "x": number,
      "y": number,
      "loss": "string",
      "description": "string",
      "method": "string"
    }
  ]
}
```

### 2. GET /api/advice-content
**Purpose**: Fetch warning boxes and advice content
**Response**:
```json
{
  "adviceBoxes": [
    {
      "id": 1,
      "type": "warning|advice|contact",
      "title": "string",
      "content": ["string"],
      "source": "string"
    }
  ]
}
```

### 3. GET /api/protection-steps
**Purpose**: Fetch protection guidelines
**Response**:
```json
{
  "steps": [
    {
      "id": 1,
      "title": "string", 
      "description": "string"
    }
  ]
}
```

## Backend Implementation Plan

### MongoDB Collections
1. **fraud_incidents**: Store incident data with geolocation
2. **advice_content**: Store warning and advice boxes
3. **protection_steps**: Store protection guidelines

### Models (Pydantic)
- `FraudIncident`: Main incident model
- `AdviceBox`: Advice content model  
- `ProtectionStep`: Protection step model

## Frontend Integration Changes

### Files to Update:
1. **NewsStory.jsx**: Replace mock imports with API calls
2. **InteractiveMap.jsx**: Use real incident data
3. **Timeline.jsx**: Use real incident data
4. **Remove**: `/src/data/mockData.js` after integration

### API Integration:
- Use axios to fetch data on component mount
- Add loading states for better UX
- Handle error states gracefully
- Maintain current component props structure

## Database Seed Data
The current mock data will be seeded into MongoDB to maintain the Norwegian content and ensure seamless transition from frontend-only to full-stack.