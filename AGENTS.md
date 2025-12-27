# 🤖 Agent Cooperation Protocol (v2.0)

## 1. Role Definition & Intelligent Allocation

| 에이전트 | 핵심 역할 | 권장 모델 및 강점 |
| :--- | :--- | :--- |
| **Jules** | **Repo Guardian**: 아키텍처 설계, 대규모 리팩토링, PR 자동화. | Gemini 1.5 Pro (1M+ 컨텍스트 활용). |
| **Cursor** | **Logic Builder**: 핵심 비즈니스 로직 구현 및 UI/UX 정밀 코딩. | Claude 3.5 Sonnet (추론) / DeepSeek-V3 (비용 절감). |
| **Antigravity** | **Operation Agent**: 환경 설정, 터미널 제어, E2E 자동 테스트. | Gemini 1.5 Flash (압도적 속도 및 저비용). |

## 2. Lifecycle Execution Protocol (Cost-Optimized)

1. **Planning (Day 1-3):** **Deep Research(Pro)**를 통해 수익 시장을 발굴하고 기능을 명세화한다.
2. **Scaffolding (Day 4-7):** **Antigravity(Flash)**가 자율적으로 개발 환경을 세팅한다.
3. **Vibe Build (Day 8-30):** **Cursor(DeepSeek)**로 빠르게 MVP를 개발하고, 핵심 로직은 **Claude 3.5**로 검증한다.
4. **Verification (Day 31-40):** **Antigravity Browser Agent**가 결제 및 가입 시나리오를 자동 테스트한다.
5. **Operation (Day 41-90):** 로그 분석 및 반복적 개선 작업은 **Flash** 모델로 빠르게 처리하여 비용을 아낀다.

## 3. Conflict Resolution & Decision Making
- **중복 작업 방지:** Jules는 백엔드/구조를, Cursor는 프론트엔드/로직을 우선한다.
- **비용 정책:** 높은 지능이 필요 없는 모든 단순 코딩/테스트는 반드시 **Gemini 1.5 Flash**를 사용한다.
- **보안 수칙:** 모든 에이전트는 `.gitignore`를 준수하며 API 키 노출을 철저히 감시한다.

## 4. Definition of Done (DoD)
- 모든 코드는 실제 배포(Production)가 가능한 수준이어야 함.
- 모든 기능 추가 시 관련 환경 변수와 README 로드맵이 업데이트되어야 함.
