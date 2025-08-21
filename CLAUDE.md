# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 응답 언어
- 모든 응답은 한국어로 작성하세요.

## 프로젝트 개요

도서 관리 시스템을 위한 새로운 프로젝트입니다. 현재 코드베이스는 비어있으며 초기 개발을 위한 준비가 되어있습니다.

## 개발 명령어

빌드 시스템이나 패키지 매니저가 아직 구성되지 않았습니다. 프로젝트가 발전함에 따라 일반적인 명령어들이 여기에 추가될 예정입니다.

## 아키텍처

초기 프로젝트 구조가 설정되면 아키텍처가 여기에 문서화될 예정입니다.

## Git 관리
- 항상 적절한 .gitignore 파일을 확인하고 포함하세요.
- .gitignore는 사용되는 기술 스택에 대한 표준 파일/폴더를 포함해야 합니다 (예: node_modules/, dist/, .env).

## 네이밍 규칙

### 기본 규칙
- **상수**: UPPER_SNAKE_CASE
- **변수**: camelCase (타입 유추 가능한 이름)
- **함수**: camelCase (동사+명사 패턴 - 동사=액션, 명사=결과)
- **클래스**: PascalCase
- **프라이빗 멤버**: 언더스코어 접두사 (_)
- **불린 변수**: is, has, can, should 접두사 사용 (예: isActive, hasData)
- **컬렉션 변수**: 복수 명사 또는 구조를 암시하는 접미사 (예: users, itemList, cacheMap)

### 함수 네이밍
- **변경 함수**: 액션 기반 동사 사용 (예: saveUser, deleteFile)
- **조회 함수**: get/find/fetch/load로 시작 (예: getUserById, fetchData)
- 일관된 용어 사용 (count/total/number 같은 동의어 혼용 금지)
- 가능한 한 약어 사용 금지. 필요한 경우 대문자 스타일 사용 (예: Api, Html)

## 주석 스타일 가이드

모든 함수, 클래스, 메서드는 JSDoc 형식으로 작성하며, 다음 규칙을 따르세요:

### 필수 요소
1. **언어**: 모든 주석은 한국어로 작성
2. **형식**: JSDoc 주석 내에서 Markdown 구문 사용
3. **포함 내용**:
   - 함수/메서드 목적과 동작 설명
   - 매개변수 설명 (@param)
   - 반환값 설명 (@returns)
   - 사용 예시 (@example)
   - 필요시 주의사항

### JSDoc 템플릿
```javascript
/**
 * ## 함수 설명
 *
 * 이 함수는 **[주요 목적]**을 수행하고 **[동작 방식]**을 따릅니다.
 *
 * ### 주요 기능
 * - 주요 기능 1
 * - 주요 기능 2
 *
 * @param {type} parameterName - 매개변수에 대한 **상세한 설명**
 * @returns {type} 반환값에 대한 **상세한 설명**
 *
 * @example
 * ```javascript
 * // 사용 예시
 * const result = functionName(parameter);
 * ```
 *
 * @since version
 * @author author
 */
```

## 시작하기

새 프로젝트입니다. 다음을 고려하세요:
- 기술 스택 선택 (웹 앱, 데스크톱 앱, 모바일 등)
- 패키지 관리 설정 (Node.js의 경우 npm/yarn, Python의 경우 pip 등)
- 초기 프로젝트 구조 생성
- 빌드 및 테스트 구성 추가